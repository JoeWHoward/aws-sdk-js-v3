import {
  RDSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSClient";
import {
  EventSubscription,
  RemoveSourceIdentifierFromSubscriptionMessage
} from "../models/index";
import {
  deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand,
  serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type RemoveSourceIdentifierFromSubscriptionCommandInput = RemoveSourceIdentifierFromSubscriptionMessage;
export type RemoveSourceIdentifierFromSubscriptionCommandOutput = EventSubscription;

export class RemoveSourceIdentifierFromSubscriptionCommand extends $Command<
  RemoveSourceIdentifierFromSubscriptionCommandInput,
  RemoveSourceIdentifierFromSubscriptionCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: RemoveSourceIdentifierFromSubscriptionCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RemoveSourceIdentifierFromSubscriptionCommandInput,
    RemoveSourceIdentifierFromSubscriptionCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RemoveSourceIdentifierFromSubscriptionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<RemoveSourceIdentifierFromSubscriptionCommandOutput> {
    return deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
