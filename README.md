Project Overview
This project deploys a Node.js microservices application using Docker and Kubernetes. Each microservice uses SQLite as its database, packaged within its respective Docker container.

Prerequisites
Docker
Kubernetes (Minikube or any other Kubernetes cluster)
kubectl
Node.js

Setup:
Docker:
1- Build Docker Images by running docker-compose up
2- docker login
3- Push Docker Images to Docker Hub

Kubernetes:
1- Start minikube
2- Go in kubernetes folder and run kubectl apply -f .
3- kubectl get pods to see all pods are running or not ?
4- run minikube ip
5- http://<minikube-ip>:<nodeport> replace nodeport with nodeport of each services noted in each service kubernetes yaml and access the application
