import type { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup } from "discordx";

@Discord()
@SlashGroup({
  name: "이벤트",
  description: "이벤트를 생성하거나 참여할 수 있습니다.",
})
@SlashGroup("이벤트")
export class Example {
  @Slash({  
    name: "생성",
    description: "이벤트를 생성합니다.",
  })
  async create(interaction: CommandInteraction): Promise<void> {
    await interaction.reply("생성");
  }
}
