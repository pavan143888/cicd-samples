**Deployment Instructions**

1. Navigate to cloud formation service in aws console

2. Create CodePipeline stack using CodePipeline.yml

3. Fill the following parameters values
```
StackName: CodePipeline
ContainerPort: 80
GitHubBranch: master
GitHubOAuthToken: abc (Take from github account)
GitHubRepo: ecs-sample (Replace your repository name)
GitHubUserName: krishvasanth (Replace your GitHub user name)
```
4. Give IAM Capabilities Permission during creation of stack.

5. Once CodePipeline stack created, then pipeline will pull the code from your repo and build docker image and create ecs cluster, task definitions (Launch Type: Fargate) and services etc.
6. Once ecs cluster created, deployment will be happen automatically
7. After first deployment completed, navigate to EC2 service and view Load balancer DNS url, run in your browser 

**Note**
1. If you change container port here, then you have to change app.js and Docker File
2. If your Docker node image not downloding, then replace or create your own custom images and replace it.

```bash
FROM 746147974374.dkr.ecr.us-east-1.amazonaws.com/node10 to node:10
``` 


 
 
