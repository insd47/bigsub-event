import { ApplicationCommandOptionType, type CommandInteraction } from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
import prisma from "../../utilities/prisma";
import { getGuildAsAuthor } from "../../utilities/author";
import errorEmbed from "../../embeds/error";

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
  async create(
    @SlashOption({
      name: "이름",
      description: "이벤트의 이름을 입력하세요.",
      type: ApplicationCommandOptionType.String,
    })
    name: string,

    interaction: CommandInteraction
  ): Promise<void> {
    if (!interaction.guildId) {
      await interaction.reply("길드에서만 사용할 수 있습니다.");
      return;
    }

    try {
      await prisma.event.create({
        data: {
          name: name,
          managerId: interaction.user.id,
          guild: {
            connectOrCreate: {
              where: {
                id: interaction.guild!.id,
              },
              create: {
                id: interaction.guild!.id,
              },
            },
          }
        }
      });

      await interaction.reply({
        embeds: [{
          author: getGuildAsAuthor(interaction),

          color: 0x3CB371,
          title: "이벤트가 생성되었습니다! 🎉",

          fields: [
            {
              name: "이벤트 이름",
              value: name,
            },
            {
              name: "이벤트 관리자",
              value: `<@${interaction.user.id}>`,
            }
          ]
        }]
      });
    } catch (e) {
      await interaction.reply({ embeds: [errorEmbed(interaction, String(e).slice(0, 180))] });
    }
  }
}
