# RabbitMQ Implementation

A collection of RabbitMQ tutorials and implementations demonstrating various messaging patterns and use cases using JavaScript.

## Table of Contents

- [Hello World](#hello-world)
- [Work Queues](#work-queues)
- [Publish/Subscribe](#publishsubscribe)
- [Routing](#routing)
- [Topics](#topics)
- [Remote Procedure Call (RPC)](#remote-procedure-call-rpc)

## Hello World

Learn the basics of RabbitMQ messaging with a simple producer/consumer example.

🔗 [Tutorial Link](https://www.rabbitmq.com/tutorials/tutorial-one-javascript)

## Work Queues

Distribute time-consuming tasks among multiple workers using work queues.

🔗 [Tutorial Link](https://www.rabbitmq.com/tutorials/tutorial-two-javascript)

## Publish/Subscribe

Broadcast messages to multiple consumers using the publish/subscribe pattern.

🔗 [Tutorial Link](https://www.rabbitmq.com/tutorials/tutorial-three-javascript)

## Routing

Receive messages selectively based on routing patterns.

🔗 [Tutorial Link](https://www.rabbitmq.com/tutorials/tutorial-four-javascript)

## Topics

Implement routing based on multiple criteria using topic exchanges.

🔗 [Tutorial Link](https://www.rabbitmq.com/tutorials/tutorial-five-javascript)

## Remote Procedure Call (RPC)

Learn how to implement request/reply pattern using RPC in RabbitMQ.

🔗 [Tutorial Link](https://www.rabbitmq.com/tutorials/tutorial-six-javascript)

## Getting Started

1. Make sure you have RabbitMQ server installed and running
2. Install the required dependencies:
   ```bash
   npm install amqplib
   ```
3. Follow the individual tutorials in order to understand each messaging pattern

## Requirements

- Node.js
- RabbitMQ Server
- amqplib (Node.js RabbitMQ client)
