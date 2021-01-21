#!/bin/bash
aws cloudformation package \
  --template-file cloudformation/template.yaml \
  --s3-bucket "cicd-pipeline-java-bucket" \
  --output-template-file cloudformation/template-packaged.yaml

aws cloudformation deploy \
  --template-file cloudformation/template-packaged.yaml \
  --stack-name "cicd-pirpline-java-deploy-stack" \
  --capabilities CAPABILITY_NAMED_IAM \
  --no-fail-on-empty-changeset \
  --parameter-overrides \
    AwsNamespace="cicd-testing-java"
