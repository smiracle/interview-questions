# Aws Topics

## Table of Contents
- [What is AWS?](#what-is-aws)
- [You have two applications deployed in separate AWS accounts, and you need to establish connectivity between them. What AWS services or configurations would you utilize, and why?](#you-have-two-applications-deployed-in-separate-aws-accounts-and-you-need-to-establish-connectivity-between-them-what-aws-services-or-configurations-would-you-utilize-and-why)
- [What is GraphQL?](#what-is-graphql)

### What is AWS?

Amazon Web Services (AWS) is a comprehensive and broadly adopted cloud platform offered by Amazon. It provides over 200 fully featured services from data centers globally. AWS services can be used by developers, enterprises, governments, and startups to lower costs, become more agile, and innovate faster. 
AWS offers a wide range of cloud computing services and solutions for computing power, storage options, networking, database management, analytics, deployment, management, machine learning, security, and more. Users can select services as needed, and AWS provides a scalable and efficient way to manage infrastructure resources.

Key features of AWS include:
- Elastic Compute Cloud (EC2): Provides scalable virtual servers.
- Simple Storage Service (S3): Offers scalable and secure cloud storage.
- Relational Database Service (RDS): Simplifies setup, operation, and scaling of a relational database.
- Lambda: Allows running code without provisioning or managing servers.
- CloudFront: A global content delivery network (CDN) service.
- Elastic Beanstalk: An easy-to-use service for deploying applications which automates the deployment of applications in the cloud.

[↑ Back to top](#aws-topics)

### You have two applications deployed in separate AWS accounts, and you need to establish connectivity between them. What AWS services or configurations would you utilize, and why?

There are several effective approaches to connect applications in different AWS accounts:

VPC Peering: Set up VPC peering between the VPCs hosting the applications. This allows instances in both VPCs to communicate securely as if they are on the same network.

VPN Connection: Establish a VPN connection between the VPCs or on-premises networks associated with each AWS account. This ensures secure communication over the internet.

AWS Direct Connect: Create a dedicated network connection using AWS Direct Connect between the on-premises network and the VPCs. This provides a reliable and consistent network experience.

Transit Gateway: Deploy a Transit Gateway in one AWS account and attach VPCs from both accounts. It acts as a central hub for routing traffic between VPCs, simplifying connectivity management.

AWS PrivateLink: Utilize AWS PrivateLink to securely access services across VPCs without exposing traffic to the public internet. PrivateLink establishes private connectivity using Elastic Network Interfaces (ENIs).

Cross-Account IAM Roles: Set up IAM roles to allow secure access between applications in different AWS accounts without sharing credentials. This ensures controlled access to resources.

[↑ Back to top](#aws-topics)

### What is GraphQL?

GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. Unlike RESTful APIs, which use multiple URLs to access different data sets, GraphQL accesses all the data from a single endpoint. It allows clients to request exactly the data they need, making it efficient for both the client and the server.
Developed internally by Facebook in 2012 before being publicly released in 2015, GraphQL provides a more efficient, powerful, and flexible alternative to the traditional REST API. It allows for real-time data retrieval through subscriptions and is designed to make APIs fast, flexible, and developer-friendly.

 ##### Key Features
- Single Endpoint: Uses a single endpoint to access different data, which simplifies the API structure.
- Data Fetching Efficiency: Allows clients to specify exactly what data they need, reducing the amount of data transferred over the network.
- Real-Time Data with Subscriptions: Supports real-time data updates, enabling applications to be more dynamic and responsive.
- Strongly Typed: Every data structure is associated with a specific type, which helps in validating the queries against the schema.
- Developer Tools: Offers a rich ecosystem of development tools, including graphical interfaces for exploring the schema and testing queries.

 ##### Common Use Cases
- Building complex, interactive web and mobile applications that require real-time data updates.
- Aggregating data from multiple sources within an organization into a unified API.
- Improving performance of applications by minimizing data over-fetching and under-fetching.
- Rapid development of APIs for complex data models without compromising on performance.

[↑ Back to top](#aws-topics)


