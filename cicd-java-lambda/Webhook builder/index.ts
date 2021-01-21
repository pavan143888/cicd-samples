import { EventProcessor } from "./EventProcessor";


exports.handler = async (event: any) => {
    console.log("received event: ", JSON.stringify(event, null, 2));

    try {
        if (!event || !event.Records || !event.Records.length) {
            return Promise.resolve("received empty event");
        }

        if (event.Records.length !== 1) {
            return Promise.resolve(`unexpected number of records: ${event.records}`);
        }

        const record: GitHubEventRecord = event.Records[0];
        const body: GitHubEventRecordBody = JSON.parse(record.body);

        const processor = new EventProcessor();
        const response = await processor.run(body.APIGatewayRequest);

        console.log("[EventProcessor] response: ", response);

        return Promise.resolve();
    } catch (err) {
        console.log("failed to run event processor: ", err);
        return Promise.resolve();
    }
};

interface APIGatewayRequest {
    headers: {[key: string]: string};
    body: string;
}

export interface GitHubEventRecord {
    // body is `GitHubEventRecordBody` JSON serialized.
    body: string; //
    messageAttributes?: {};
}

export interface GitHubEventRecordBody {
    APIGatewayRequest: APIGatewayRequest;
}
