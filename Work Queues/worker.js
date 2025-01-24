#!/usr/bin/env node

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'task_queue';

    // This makes sure the queue is declared before attempting to consume from it
    channel.assertQueue(queue, {
      durable: true
    });

    channel.prefetch(1); // 1 message at a time per worker

    channel.consume(queue, function(msg) {
      const secs = msg.content.toString().split('.').length - 1;

      console.log(" [x] Received %s", msg.content.toString());
      setTimeout(function() {
        channel.ack(msg)
        console.log(" [x] Done");
      }, secs * 1000);
    }, {
      // automatic acknowledgment mode,
      // setting it to false requires manual ack (channel.ack(msg))
      // see /docs/confirms for details
      noAck: false
    });
  });
});
