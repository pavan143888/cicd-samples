#!/bin/bash
aws cloudformation package \
  --template-file cloudformation/template.yaml \
  --s3-bucket "test-cicd-webhook-proxy-java" \
  --output-template-file cloudformation/template-packaged.yaml

aws cloudformation deploy \
  --template-file cloudformation/template-packaged.yaml \
  --stack-name "test-cicd-webhook-proxy-deploy-java" \
  --capabilities CAPABILITY_NAMED_IAM \
  --no-fail-on-empty-changeset \
  --parameter-overrides \
    AwsNamespace="cicd-webhook-proxy-java"
