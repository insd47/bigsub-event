import type { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup } from "discordx";

@Discord()
@SlashGroup("이벤트")
export class Example {
  @Slash({  
    name: "참여",
    description: "이벤트에 참여합니다.",
  })
  async create(interaction: CommandInteraction): Promise<void> {
    await interaction.reply("생성");
  }
}
