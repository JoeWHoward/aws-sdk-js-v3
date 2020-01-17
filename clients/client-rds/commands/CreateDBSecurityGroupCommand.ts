import {
  RDSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSClient";
import { CreateDBSecurityGroupMessage, DBSecurityGroup } from "../models/index";
import {
  deserializeAws_queryCreateDBSecurityGroupCommand,
  serializeAws_queryCreateDBSecurityGroupCommand
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

export type CreateDBSecurityGroupCommandInput = CreateDBSecurityGroupMessage;
export type CreateDBSecurityGroupCommandOutput = DBSecurityGroup;

export class CreateDBSecurityGroupCommand extends $Command<
  CreateDBSecurityGroupCommandInput,
  CreateDBSecurityGroupCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBSecurityGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateDBSecurityGroupCommandInput,
    CreateDBSecurityGroupCommandOutput
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
    input: CreateDBSecurityGroupCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBSecurityGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateDBSecurityGroupCommandOutput> {
    return deserializeAws_queryCreateDBSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
