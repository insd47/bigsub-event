import { AutocompleteInteraction } from "discord.js";
import prisma from "../utilities/prisma";


export async function getEvents(interaction: AutocompleteInteraction) {
  const input = interaction.options.getString("name") ?? ""

  return await prisma.event.findMany({
    where: {
      name: {
        contains: input,
      }
    }
  }).then((events) => events.map((e) => ({
    name: e.name,
    value: e.id,
  })))
}