import { APIGatewayRequest } from "./APIGateway";
import * as AWS from "aws-sdk";

export class EventProcessor {
    async run(req: APIGatewayRequest): Promise<any> {
        const rawPayload: string = req.body;
        console.log("json body: "+JSON.parse(req.body));
        const {ref, after}= JSON.parse(req.body);
        const responseOK: any = { statusCode: 200 };
        //const payload: IssueCommentPayload = JSON.parse(rawPayload);
        let commitId = after;
        const sourceVersion = ref;
        const codebuild = new AWS.CodeBuild({
            region: "us-east-1",
        });
            await this.runBuild(codebuild,"cicd-pipeline-project", sourceVersion, sourceVersion);

        console.log("codebuild started")
        return Promise.resolve(responseOK);

        // const sourceVersion: string = prLastCommit;
    }

    private async runBuild(codebuild: any, projectName: string, sourceVersion: any, idempotencyToken: string): Promise<any> {
        const params = {
            projectName: projectName,
            artifactsOverride: {
                type: 'NO_ARTIFACTS',
            },
            cacheOverride: {
                type: 'NO_CACHE',
            },
            idempotencyToken,
            sourceVersion,
        };
        return codebuild.startBuild(params).promise();
    }

    // async lookupLastPullRequestCommit(pullNumber: number): Promise<any> {
    //     const resp = await this.octokit.pulls.listCommits({
    //         owner: this.REPO_OWNER,
    //         repo: this.REPO_NAME,
    //         pull_number: pullNumber,
    //         per_page: 100,
    //     });
    //
    //     if (!resp || !resp.data || !resp.data.length) {
    //         return Promise.resolve();
    //     }
    //
    //     const commits = resp.data;
    //     const lastCommit: string = commits[commits.length - 1].sha;
    //
    //     return Promise.resolve(lastCommit);
    // }
}
//
// interface IssueCommentPayload {
//     action: string;
//     comment: {
//         body: string;
//     };
//     issue: {
//         id: number;
//         number: number;
//         pull_request: {
//             url: string;
//         };
//     };
// }