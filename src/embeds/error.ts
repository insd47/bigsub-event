import { APIEmbed, BaseInteraction } from "discord.js";
import { getGuildAsAuthor } from "../utilities/author";


export default function errorEmbed(interaction: BaseInteraction, message: string): APIEmbed {
  return {
    author: getGuildAsAuthor(interaction),
    color: 0xDF6464,
    title: "오류가 발생했습니다.",
    description: message,
  }
}
