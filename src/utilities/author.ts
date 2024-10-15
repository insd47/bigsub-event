import { BaseInteraction } from "discord.js";

export function getGuildAsAuthor(interaction: BaseInteraction) {
  return interaction.guildId ? {
    name: interaction.guild!.name,
    icon_url: interaction.guild!.iconURL() ?? undefined,
  } : undefined;
}