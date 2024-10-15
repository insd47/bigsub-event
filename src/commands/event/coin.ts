import type { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup } from "discordx";

@Discord()
@SlashGroup("이벤트")
export class Example {
  @Slash({  
    name: "코인",
    description: "현재까지 얻은 코인을 확인합니다.",
  })
  async create(interaction: CommandInteraction): Promise<void> {
    await interaction.reply("생성");
  }
}
