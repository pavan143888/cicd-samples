#!/bin/bash
aws cloudformation deploy \
  --template-file cloudformation/lambda-s3.yaml \
  --stack-name "cicd-pipeline-java-provision-stack"  \
  --capabilities CAPABILITY_NAMED_IAM \
  --no-fail-on-empty-changeset \
