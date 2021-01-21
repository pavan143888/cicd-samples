#!/bin/bash
aws cloudformation package \
  --template-file cloudformation/template.yaml \
  --s3-bucket "test-cicd-webhook-builder-bucket-java" \
  --output-template-file cloudformation/template-packaged.yaml

aws cloudformation deploy \
  --template-file cloudformation/template-packaged.yaml \
  --stack-name "test-cicd-webhook-builder-deploy-java" \
  --capabilities CAPABILITY_NAMED_IAM \
  --no-fail-on-empty-changeset \
  --parameter-overrides \
    AwsNamespace="cicd-webhook-builder-java"
