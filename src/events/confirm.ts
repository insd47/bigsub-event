import { ArgsOf, Client, Discord, On } from "discordx";


@Discord()
export class Confirm {
  @On()
  async messageReactionAdd([message]: ArgsOf<"messageReactionAdd">, client: Client) {

  }

  @On()
  async messageReactionRemove([message]: ArgsOf<"messageReactionRemove">, client: Client) {

  }
}