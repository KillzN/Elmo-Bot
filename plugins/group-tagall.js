const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `*@botelmo _*`;
  let teks = `* 𝐄𝐥𝐦𝐨 𝐋𝐨𝐬 𝐈𝐧𝐯𝐨𝐜𝐚💋🥑*\n\n *${oi}\n\n_*➥ 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:*_\n`;

  for (const mem of participants) {
    teks += `*🐿🎀 ⇝* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└Bot elmo*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;