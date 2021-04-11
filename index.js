/*
~OM MAU NGAPAIN OM
~OM JANGAN OM
~SUBSCRIBE CHANEL GUA NGAB
~MrG{108P}*
~JANGAN ENAK DOANG LUH
]=====> TOTQ <=====]
•MrG{108P}
•AFFIS JUNIANTO
•FADHIL GRAPHY
•Sofyan Amv
•Mr.A43G
•Arashi~
•Ramlan ID
•VHTEAR
•TOBZ
•XTEAM
•LolHuman
•MHANKBARBAR
•All Creator Bot WhatsApp
=>>>>>>>>>>>>>>>>>>>
*/
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./owner/group/color')
const { donasi } = require('./owner/group/donasi')
const { fetchJson } = require('./owner/group/fetcher')
const { recognize } = require('./owner/group/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./owner/group/functions')
const tiktod = require('tiktok-scraper')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const isUrl = (ini_url) => {
                return ini_url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const ffmpeg = require('fluent-ffmpeg')
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./owner/data')
const vcard = 'BEGIN:VCARD\n'//JANGAN DI GANTI ANJING
            + 'VERSION:3.0\n'//JANGAN DI GANTI ANJING,NTAR EROR
            + 'FN:Mr.108P\n' // GANTI NAMA LU BODOH
            + 'ORG: REMBOT;\n'//GANTI NAMA BOT LUH BANGSAT
            + 'TEL;type=CELL;type=VOICE;waid=6281534162316:+62 815-3416-2316\n' // GANTI NOMOR LU BEGONIAN
            + 'END:VCARD'
//MR108P\\
prefix = "#"
blocked = []   
limitawal = 1200
memberlimit = 2
name = "MR.108P"
rdaftar = "Subscribe Mr.108P"
rmenu = "Subscribe Mr.108P"
botinfo = "Mr.108P"
fake = 'YDBOT-FIX-ANTIDELETE'
ator = 'SUBSCRIBE'
namo = 'MrG{108P}*'
cr = "~*SUBSCRIBE:MrG{108P}🍁~OWNER:Arnando🍁*"

/******** OWNER NUMBER**********/
const ownerNumber = ["6281534162316@s.whatsapp.net"] //NOMOR LUH
const premium = ["6281534162316@s.whatsapp.net","6282254187237@s.whatsapp.net","62814622392081@s.whatsapp.net","6281227825649@s.whatsapp.net","62881024843786@s.whatsapp.net","6285850763057@s.whatsapp.net","6285869225011@s.whatsapp.net","6285656214208@s.whatsapp.net"]
/************************************/

// LOAD JSON
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const _leveling = JSON.parse(fs.readFileSync('./owner/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./owner/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./owner/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./owner/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./owner/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./owner/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./owner/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./owner/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./owner/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./owner/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./owner/group/antilink.json'))
const _afk = JSON.parse(fs.readFileSync('./owner/user/afk.json'))
/*[-> afk <-]*/
const {
	addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
} = require('./owner/user/afk.json')
//MR108P\\		 
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }
        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })           
            if (position !== false) {           	
                _level[position].xp += amount
                fs.writeFileSync('./owner/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./owner/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./owner/user/level.json', JSON.stringify(_level))
        }

         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./owner/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./owner/user/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./owner/user/uang.json', JSON.stringify(uang))
            }
        }
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./owner/user/limit.json', JSON.stringify(_limit))
            }
        }
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./owner/user/uang.json', JSON.stringify(uang))
            }
        }
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./owner/user/limit.json', JSON.stringify(_limit))
            }
        }
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
//\\
const MrG = new WAConnection()
MrG.logger.level = 'warn'
console.log(banner.string)
   MrG.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' SCAN QR MU <POWERED BY MrG{108P}*>'))
})

	MrG.on('credentials-updated', () => {
		fs.writeFileSync('./Rem.json', JSON.stringify(MrG.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Mr.108P Loading...')
	})
	fs.existsSync('./Rem.json') && MrG.loadAuthInfo('./Rem.json')
	MrG.on('connecting', () => {
		start('2', 'Mr.108P Connecting...')
	})
	MrG.on('open', () => {
		success('2', 'Mr.108P Connected')
	})
	MrG.connect({timeoutMs: 30*1000})
MrG.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await MrG.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await MrG.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `ʜᴀʟʟᴏ @${num.split('@')[0]}👋\nꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ɢʀᴏᴜᴘ *
┏━━━━━━━━━━━━━━━
┃────「 *_INTRO_* 」─────
┃━━━━━━━━━━━━━━━
┠•> *Nama* :
┠•> *Umur* :
┠•> *Kelamin* :
┠•> *Askot* :
┗━━━━━━━━━━━━━━━

ᴋᴇᴛɪᴋ ${prefix}daftar nama|umur ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ`
				let buff = await getBuffer(ppimg)
				MrG.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await MrG.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Asek,beban group keluar👋 @${num.split('@')[0]}*`
				let buff = await getBuffer(ppimg)
				MrG.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	MrG.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
MrG.on('messages-update', async (mek) => {
	try {
		const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./antidelete/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./antidelete/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./antidelete/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? MrG.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync(`./antidelete/msg.data.json`))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? MrG.user.jid : MrG.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? MrG.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Text
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* *${body ? body : '-'}*`
				MrG.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await MrG.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* *Sticker*
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				MrG.sendMessage(from, strConversation, MessageType.text, opt4tag)
				MrG.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await MrG.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Image
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* ${body ? body : '-'}\`\`\``
				MrG.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})
	MrG.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			let infoMSG = JSON.parse(fs.readFileSync('./src/data/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/data/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/data/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = MrG.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = MrG.contacts[sender] != undefined ? MrG.contacts[sender].vname || MrG.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await MrG.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBanned = ban.includes(sender)
            const isPrem = premium.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				MrG.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				MrG.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? MrG.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : MrG.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    MrG.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			MrG.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    MrG.sendMessage(from, audio, mp3, {quoted:mek})
		    }
/*
stickerMessage
*/
function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}
//level
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
//limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return MrG.sendMessage(from,`Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan naik level_`, text,{ quoted: mek})
                            MrG.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./owner/user/limit.json', JSON.stringify(_limit))
                        MrG.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    MrG.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./owner/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            MrG.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
//uang
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
//antilinkgrup
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        MrG.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        MrG.groupRemove(from, [kic]).catch((e)=>{reply(`*NICO HARUS JADI ADMIN├в┬ЭтАФ*`)})
		        }, 3000)
		        setTimeout( () => {
			        MrG.updatePresence(from, Presence.composing)
			        reply("Hedsot....")
		        }, 2000)
		        setTimeout( () => {
			        MrG.updatePresence(from, Presence.composing)
			        reply("Bismillah...")
		        }, 1000)
		        setTimeout( () => {
			        MrG.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		  }               
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch(command) {
     case 'help'://UPDATE MR.108P
				case 'menu'://UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
tod = await getBuffer(`https://i.ibb.co/2yN4rNN/IMG-20210410-WA0048.jpg`)
ow = "6281534162316@s.whatsapp.net"
const uangku = checkATMuser(sender)
Mr = `╭────┈ ↷
┃□│✎┊*REM BOT -X*
┃□│╭────────╯
┃□││❏OWNER : @${ow.split('@')[0]}
┃□││❏NAMA : ${pushname}
┃□││❏UANG : Rp:${uangku}
┃□││❏PREFIX : 「 ${prefix} 」
╰─────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *ABOUT BOT* 」
╰─❁۪۪
> *${prefix}info*
> *${prefix}ping*
> *${prefix}donasi*
> *${prefix}owner*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
❏ *ANIME MENU* 」
> *${prefix}anime*
> *${prefix}anime2*
> *${prefix}naruto*
> *${prefix}boruto*
> *${prefix}minato*
> *${prefix}hinata*
> *${prefix}sakura*
> *${prefix}sasuke*
> *${prefix}kaneki*
> *${prefix}toukachan*
> *${prefix}rize*
> *${prefix}akira*
> *${prefix}itori*
> *${prefix}kurumi*
> *${prefix}miku*
> *${prefix}rem*
> *${prefix}rikka*
> *${prefix}yotsuba*
> *${prefix}sagiri*
> *${prefix}ohto*
> *${prefix}animecry*
> *${prefix}neonime*
> *${prefix}animekiss*
> *${prefix}wink*
> *${prefix}waifu*
> *${prefix}husbu*
> *${prefix}loli*
> *${prefix}waifukawai*
> *${prefix}kemonomimi*
> *${prefix}kuni*
> *${prefix}nsfwloli3*
> *${prefix}neko*
> *${prefix}holo*
> *${prefix}kusonime*
> *${prefix}pictwaifu*
> *${prefix}pictlolicon*
> *${prefix}pictneko*
> *${prefix}animesad*
> *${prefix}randomanime*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *BERITA* 」
> *${prefix}tribunnews*
> *${prefix}liputan*
> *${prefix}foxnews*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *DOWNLOADER* 」
> *${prefix}igvideo*
> *${prefix}soundcloud*
> *${prefix}tiktok*
> *${prefix}tiktoknowm*
> *${prefix}ytmp4*
> *${prefix}ytmp3*
> *${prefix}joox*
> *${prefix}play*
> *${prefix}play2*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *GROUP MENU* 」
> *${prefix}welcome「1/0」*
> *${prefix}leveling「1/0」*
> *${prefix}simih「1/0」*
> *${prefix}simi*
> *${prefix}nsfw「1/0」*
> *${prefix}antilinkgrup「1/0」*
> *${prefix}grup「buka/tutup」*
> *${prefix}add*
> *${prefix}kick [@tag target]*
> *${prefix}hedsot*
> *${prefix}linkgrup*
> *${prefix}promote*
> *${prefix}demote*
> *${prefix}setname*
> *${prefix}setdesc*
> *${prefix}leave*
> *${prefix}tagall*
> *${prefix}admin*
> *${prefix}level*
> *${prefix}fitnah*
> *${prefix}hidetag*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *DOMPET* 」
> *${prefix}limit*
> *${prefix}atm*
> *${prefix}transfer*
> *${prefix}buylimit*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *MAKER MENU* 」
> *${prefix}hartatahta*
> *${prefix}glowneon*
> *${prefix}gsuggest*
> *${prefix}candlemug*
> *${prefix}lovemss*
> *${prefix}mugflower*
> *${prefix}narutobanner*
> *${prefix}battelfiel*
> *${prefix}8bit*
> *${prefix}blueneon*
> *${prefix}matrix*
> *${prefix}breakwall*
> *${prefix}greenneon*
> *${prefix}dropwater*
> *${prefix}wolflogo*
> *${prefix}flowertext*
> *${prefix}crosslogo*
> *${prefix}silktext*
> *${prefix}flametext*
> *${prefix}glowtext*
> *${prefix}smoketext*
> *${prefix}pubglogo*
> *${prefix}skytext*
> *${prefix}hpotter*
> *${prefix}lighttext*
> *${prefix}retrotext*
> *${prefix}crismes*
> *${prefix}snowwrite*
> *${prefix}watercolor*
> *${prefix}firework*
> *${prefix}sandwrite*
> *${prefix}epep*
> *${prefix}gplaybutton*
> *${prefix}splaybutton*
> *${prefix}text3dbox*
> *${prefix}text3d*
> *${prefix}phlogo*
> *${prefix}bplogo*
> *${prefix}leavestext*
> *${prefix}textlight*
> *${prefix}glitchtext*
> *${prefix}crossfirelogo*
> *${prefix}woodblock*
> *${prefix}candlemug*
> *${prefix}coffeecup*
> *${prefix}coffeecup2*
> *${prefix}hackeravatar*
> *${prefix}jokerlogo*
> *${prefix}halloween*
> *${prefix}gaminglogo*
> *${prefix}galaxywp*
> *${prefix}text3d*
> *${prefix}watercolor*
> *${prefix}rw*
> *${prefix}flaming*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

◪ *SERTI MAKER* 」
> *${prefix}babuserti*
> *${prefix}bucinserti*
> *${prefix}bocilepepserti*
> *${prefix}gayserti*
> *${prefix}pacarserti*
> *${prefix}surgaserti*
> *${prefix}sadboyserti*
> *${prefix}pintarserti*
> *${prefix}badboyserti*
> *${prefix}badgirlserti*
> *${prefix}goodboyserti*
> *${prefix}goodgirlserti*
> *${prefix}editorberkelasserti*
> *${prefix}goodlookingserti*
> *${prefix}fucekboyserti*
> *${prefix}jametserti*
> *${prefix}hekelserti*
> *${prefix}fftourserti*
> *${prefix}fftourserti2*
> *${prefix}fftourserti3*
> *${prefix}fftourserti4*
> *${prefix}fftourserti5*
> *${prefix}pubgtourserti*
> *${prefix}pubgtourserti2*
> *${prefix}pubgtourserti3*
> *${prefix}pubgtourserti4*
> *${prefix}pubgtourserti5*
> *${prefix}mltourserti*
> *${prefix}mltourserti2*
> *${prefix}mltourserti3*
> *${prefix}mltourserti4*
> *${prefix}mltourserti5*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *OTHER MENU* 」
> *${prefix}map*
> *${prefix}happymod*
> *${prefix}pantun*
> *${prefix}quotes*
> *${prefix}tribunnews*
> *${prefix}nickepep*
> *${prefix}liputan*
> *${prefix}foxnews*
> *${prefix}playstore*
> *${prefix}searchsticker*
> *${prefix}igstalk*
> *${prefix}shopee*
> *${prefix}ytsearch*
> *${prefix}kbbi*
> *${prefix}apkpure*
> *${prefix}igsearch*
> *${prefix}wiki*
> *${prefix}film*
> *${prefix}film2*
> *${prefix}komik*
> *${prefix}spamcall*
> *${prefix}spamgmail*
> *${prefix}sidshort*
> *${prefix}asupan*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *TEBAKIN* 」
> *${prefix}tebakgambar*
> *${prefix}tebakbendera*
> *${prefix}caklontong*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *DEFACER MENU* 」
> *${prefix}dorking,
> *${prefix}encode64*
> *${prefix}decode64*
> *${prefix}decode32*
> *${prefix}encode32*
> *${prefix}encbinary*
> *${prefix}decbinary*
> *${prefix}encoctal*
> *${prefix}decoctal*
> *${prefix}becrypt*
> *${prefix}hashidentifier*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *ISLAM MENU* 」
> *${prefix}quran*
> *${prefix}surah*
> *${prefix}jadwalsholat*
> *${prefix}randomquran*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *PREMIUM MENU* 」
> *${prefix}premiumlist*
> *${prefix}randomhentai*
> *${prefix}bokep*
> *${prefix}blowjob*
> *${prefix}nulis2*
> *${prefix}nulis3*
> *${prefix}mutual*
> *${prefix}next*
> *${prefix}nangis*
> *${prefix}cium*
> *${prefix}peluk*
> *${prefix}tiktok*
> *${prefix}yutubdl*
> *${prefix}hidetag5*
> *${prefix}hidetag10*
> *${prefix}moddroid*
> *${prefix}happymod*
> *${prefix}ytmp3*
> *${prefix}ytmp4*
> *${prefix}igvideo*
> *${prefix}play*
> *${prefix}play2*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *SIMPLE MENU* 」
> *${prefix}sticker*
> *${prefix}stickerwa*
> *${prefix}fakeaddress*
> *${prefix}linesticker*
> *${prefix}ttp*
> *${prefix}ttp2*
> *${prefix}ttp3*
> *${prefix}ttp4*
> *${prefix}attp*
> *${prefix}igstory*
> *${prefix}mediafire*
> *${prefix}tts*
> *${prefix}toimg*
> *${prefix}nulis*
> *${prefix}stalking*
> *${prefix}quotes*
> *${prefix}bikinquote*
> *${prefix}darkjokes*
> *${prefix}memeindo*
> *${prefix}profile*
> *${prefix}infonomor*
> *${prefix}quotes*
> *${prefix}quotesanime*
> *${prefix}quotesdilan*
> *${prefix}quotesimage*
> *${prefix}pantun*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *RANDOM MENU* 」
> *${prefix}nekonime*
> *${prefix}loli*
> *${prefix}neko2*
> *${prefix}husbu*
> *${prefix}kpop*
> *${prefix}anjing*
> *${prefix}pokemon*
> *${prefix}bokep*
> *${prefix}darkjones*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *OWNER MENU* 」
> *${prefix}bc*
> *${prefix}bcgc*
> *${prefix}clearall*
> *${prefix}block*
> *${prefix}unblock*
> *${prefix}clone*
> *${prefix}setppbot*
> *${prefix}setreplay*
> *${prefix}setprefix*
> *${prefix}addprem*
> *${prefix}dellprem*
> *${prefix}ban*
> *${prefix}unban*
> *${prefix}event [1/0]*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *SOUND MENU* 」
> *${prefix}iri*
> *${prefix}pale*
> *${prefix}sound1*
> *${prefix}sound2*
> *${prefix}sound3*
> *${prefix}sound4*
> *${prefix}sound5*
> *${prefix}sound6*
> *${prefix}sound7*
> *${prefix}sound8*
> *${prefix}sound9*
> *${prefix}sound10*
> *${prefix}sound11*
> *${prefix}sound12*
> *${prefix}sound13*
> *${prefix}sound14*
> *${prefix}sound15*
> *${prefix}sound16*
> *${prefix}sound17*
> *${prefix}sound18*
> *${prefix}sound19*
> *${prefix}bernyanyi*
> *${prefix}kebenaran*
> *${prefix}sad*
> *${prefix}sad2*
> *${prefix}sad3*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

─────────────────┈ ❁۪۪
╭────┈ ↷
┃□│✎┊*TQTO*
┃□│╭────────╯
┃□││❏MR.108P
┃□││❏SofyanAmv
┃□││❏Ivan_maulana
┃□││❏Mr.A43G
┃□││❏Arashi
┃□││❏Ramlan ID
╰─────────────────┈ ❁ཻུ۪۪⸙͎`
MrG.sendMessage(from, tod, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./images.jpg`)},"productId":"3937202479680283","title":"@Animecarry","currencyCode":"RP","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: Mr})
            break
case 'afk'://UPDATE MR.108P
	           //UPDATE MR.108P
	           if (!isGroup) return reply(ind.groupo())
	           if (isAfkOn) return reply(ind.afkOnAlready())
	           if (isLimit(sender)) return reply(ind.limitend(pushname))
	            limitAdd(sender)
	              reason = body.slice(5)
					if (reason === undefined || reason === ' ' || reason === '') { reason = 'nothing'}
	                addAfkUser(sender, time, reason)
	                reply(ind.afkOn(pushname, reason))
	            break
	case 'daftar'://ARYA TOLOL CUKK
         case 'daftar':
	          	if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
					try {
					ppimg = await MrG.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `╭─「 *_ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ_* 」\`\`\`\n│ ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ ʙᴇʀʜᴀꜱɪʟ ꜱɴ: \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`ᴘᴀᴅᴀ  ${time}\`\`\`\n│\`\`\`「 ɴᴀᴍᴀ 」: ${pushname}\`\`\`\n│\`\`\`「 ɴᴏᴍᴏʀ 」: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ\`\`\`\n│\`\`\`ꜱɪʟᴀʜᴋᴀɴ\`\`\`\n│\`\`\`ᴋɪʀɪᴍ ${prefix}menu\`\`\`\n│\`\`\`\n`
					addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    daftarimg = await getBuffer(ppimg)
					MrG.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					MrG.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
	            /*
]=====> SIMPLE MENU <=====[
*/
				case 'sticker': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await MrG.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									MrG.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await MrG.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									MrG.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
case 'stickerwa'://UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=Apikey&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=Apikey&img=${x}`)
                        MrG.sendMessage(from, ini_buffer, sticker)
                    }
                    break
			case 'dadu'://UPDATE MR.108P
			//UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
	   random = `${Math.floor(Math.random() * 6)}`
        hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(ind.wait())
			buffer = fs.readFileSync(rano)
			MrG.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
			case 'rw'://UPDATE MR.108P
if (args.length < 1) return reply(`Contoh: rw anu`)
gl = `${args.join('')}`
gel1 = gl.split("|")[0];
gel2 = gl.split("|")[1];
gel3 = gl.split("|")[2];
reply(ind.wait())
litsh = await getBuffer(`https://api-rull.herokuapp.com/api/photofunia/retro-wave?text1=${gel1}&text2=${gel2}&text3=${gel3}&font=2`, {method: 'get'})
MrG.sendMessage(from, nan, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'flaming'://UPDATE MR108P
     if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}galaxywp ArnandoGanz`)
    arnando = body.slice(9)
    reply(ind.wait())
nan = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/flaming?text=${arnando}`)
MrG.sendMessage(from, nan, image, {quoted: mek})
     await limitAdd(sender)
     break
			case 'galaxywp'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}galaxywp ArnandoGanz`)
    arnando = body.slice(10)
    reply(ind.wait())
nan = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${arnando}`)
MrG.sendMessage(from, nan, image, {quoted: mek})
     await limitAdd(sender)
     break
			case 'galaxywp'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}galaxywp ArnandoGanz`)
    arnando = body.slice(10)
    reply(ind.wait())
nan = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${arnando}`)
MrG.sendMessage(from, nan, image, {quoted: mek})
     await limitAdd(sender)
     break
case 'crossfirelogo'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}crossfirelogo ArnandoGanz`)
    cros = body.slice(15)
    reply(ind.wait())
bit = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${cros}`)
MrG.sendMessage(from, bit, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'aov'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}crossfirelogo ArnandoGanz`)
    arnando = body.slice(5)
    reply(ind.wait())
bit = await getBuffer(`https://api.xteam.xyz/photooxy/aov?text=${arnando}&APIKEY=Fuzbot1`)
MrG.sendMessage(from, bit, image, {quoted: mek})
     await limitAdd(sender)
     break
     
     case 'hpotter'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}crossfirelogo ArnandoGanz`)
    hpo = body.slice(8)
    reply(ind.wait())
bit = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpo}`)
MrG.sendMessage(from, bit, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'gaminglogo'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}gaminglogo ArnandoGanz`)
    arnando = body.slice(11)
    reply(ind.wait())
nan = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${arnando}`)
MrG.sendMessage(from, nan, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'woodblock'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}crossfirelogo ArnandoGanz`)
    cros = body.slice(11)
    reply(ind.wait())
bit = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${cros}`)
MrG.sendMessage(from, bit, image, {quoted: mek})
     await limitAdd(sender)
     break
case 'candlemug'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}candlemug ArnandoGanz`)
    wood = body.slice(11)
    reply(ind.wait())
nan = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${wood}`)
MrG.sendMessage(from, nan, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'coffeecup'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}candlemug ArnandoGanz`)
    coff = body.slice(10)
    reply(ind.wait())
nan = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${coff}`)
MrG.sendMessage(from, nan, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'coffeecup2'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}candlemug ArnandoGanz`)
    coff = body.slice(11)
    reply(ind.wait())
nan = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2/?text=${coff}`)
MrG.sendMessage(from, nan, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'hackeravatar'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}crossfirelogo ArnandoGanz`)
    cros = body.slice(14)
    reply(ind.wait())
bit = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${cros}&apikey=LoliHunter`)
MrG.sendMessage(from, bit, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'sandw'://UPDATE MR.108P
//UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}crossfirelogo ArnandoGanz`)
    cros = body.slice(6)
    reply(ind.wait())
bit = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${cros}`)
MrG.sendMessage(from, bit, image, {quoted: mek})
     await limitAdd(sender)
     break
     
case 'speed'://UPDATE FIX BUG
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                MrG.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: mek})
                    break					
                case 'bikinquote':
                if (!isRegistered) return reply(ind.noregis())
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                //UPDATE MR.108P
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\n\ncontoh : ${prefix}bikinquote REM&MrG108P`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					MrG.sendMessage(from, buffer, image, {caption: 'Nih kak >_<', quoted: mek})
					await limitAdd(sender)
					break
				case 'simisimi'://UPDATE MR.108P
				simi = await fetchJson(`https://onlydevcity.herokuapp.com/api/simisimi?text=${body.slice(9)}&apikey=Apikeyluh`)
				reply(simi.result)
				break
				case 'tts'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return MrG.sendMessage(from, 'Kode bahasanya mana kak? contoh : ${prefix}Nakano Miku', text, {quoted: mek})
					const gtts = require('./owner/group/gtts')(args[0])
					if (args.length < 2) return MrG.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang kak')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a adminopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							MrG.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
					case 'caklontong'://UPDATE MR.108P
					anu = await fetchJson(`https://api-rull.herokuapp.com/api/caklontong`, {method: 'get'})
					setTimeout( () => {
					MrG.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.deskripsi, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, anu.result.soal, text, {quoted: mek })
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
					case 'tebakgambar'://UPDATE MR.108P
                 //UPDATE MR.108P
                 if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					MrG.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=Apikey`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					MrG.sendMessage(from, '*➸ Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'apkpure'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
			case 'katakatadilan'://UPDATE MR.108P
			//UPDATE MR.108P
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3` , {method: 'get'})
					reply(ind.wait())
					break
					case 'katadoi'://UPDATE MR.108P
			//UPDATE MR.108P
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(ind.wait())
					break
					case 'hemkel'://UPDATE MR.108P
			//UPDATE MR.108P
				gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})
					reply(ind.wait())
					break
					case 'quoterandom'://UPDATE MR.108P
			//UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katastory.php?apikey=xptn3`, {method: 'get'})
					reply(ind.wait())
					break	
				case 'profile'://UPDATE MR.108P
    				MrG.updatePresence(from, Presence.composing)
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
    				try {
					profil = await MrG.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰─────────────────────`
					buff = await getBuffer(profil)
					MrG.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
//MAKER MENU\\
case 'glowneon'://UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`Contoh: ${prefix}glowneon Mr.108P`)
tekas = body.slice(10)
reply(ind.wait())
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
MrG.sendMessage(from, glown, image, {quoted: mek})
await limitAdd(sender)
break
case 'gsuggest'://UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`Contoh: ${prefix}gsuggest Mr.108P/rem/bot`)
du = `${body.slice(10)}`
ted1 = du.split("/")[0];
ted2 = du.split("/")[1];
ted3 = du.split("/")[2];
reply(ind.wait())
sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
MrG.sendMessage(from, sugetg, image, {quoted: mek})
await limitAdd(sender)
break
case 'candlemug'://UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}candlemug ArnandoGanz`)
ddu = body.slice(11)
reply(ind.wait())
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
MrG.sendMessage(from, clmug, image, {quoted: mek})
await limitAdd(sender)
break
case 'lovemss'://UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}lovemss ArnandoGanz`)
lop = body.slice(9)
reply(ind.wait())
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
MrG.sendMessage(from, lepms, image, {quoted: mek})
await limitAdd(sender)
break
case 'mugflower'://UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}mugflower ArnandoGanz`)
mug = body.slice(11)
reply(ind.wait())
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
MrG.sendMessage(from, mflowg, image, {quoted: mek})
await limitAdd(sender)
break
case 'narutobanner'://UPDATE MR.108P
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner ArnandoGanz`)
    nar = body.slice(14)
    reply(ind.wait())
    narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
    MrG.sendMessage(from, narba, image, {quoted: mek})
     await limitAdd(sender)
     break
     case 'battelfiel'://UPDATE MR.108P
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}battelfiel ArnandoGanz`)
   du = `${body.slice(12)}`
  ted1 = du.split("/")[0];
  ted2 = du.split("/")[1];
    reply(ind.wait())
    batte = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${ted1}&text2=${ted2}`)
  MrG.sendMessage(from, batte, image, {quoted: mek})
     await limitAdd(sender)
     break
case '8bit'://UPDATE MR.108P//UPDATE MR108P
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix} 8bit ArnandoGanz`)
   du = `${body.slice(5)}`
  ted1 = du.split("/")[0];
  ted2 = du.split("/")[1];
    reply(ind.wait())
bit = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${ted1}&text2=${ted2}`)
MrG.sendMessage(from, bit, image, {quoted: mek})
     await limitAdd(sender)
     break
  //MAKER MENU\\
  case 'joox':
		if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                MrG.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                MrG.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
case 'play'://UPDATE MR.108P   
				play = body.slice(6)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				MrG.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				MrG.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				break
				case 'play2'://UPDATE MR.108P   
				play = body.slice(7)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumbnail)
				MrG.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				MrG.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: freply})
				break
				case 'jokerlogo':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=Apikey&text=${ct}`)
				MrG.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
			case 'toxic':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/toxic?apikey=Apikey&text=${ct}`)
				akira.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'bloodfrosted':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${lolhuman}&text=${ct}`)
				MrG.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'halloween':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=Apikey&text=${ct}`)
				MrG.sendMessage(from, ct, image, {quoted: mek})
				await limitAdd(sender)
				break
case 'igvideo'://UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(9)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=Apikey&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    MrG.sendMessage(from, buffer, video, )
				    break
case 'soundcloud'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/soundcloud?apikey=apivinz&url=${args[0]}`, {method: 'get'})
buffer1 = await getBuffer(anu.result.thumb)
teks = `Judul : ${anu.result.title}
Durasi : ${anu.result.duration}
Quality : ${anu.result.quality}
𝙏𝙪𝙣𝙜𝙜𝙪 𝙮𝙖 𝙠𝙖𝙠 :)
Ni Biar Cepat :
${anu.result.download}`
MrG.sendMessage(from, buffer1, image, {quoted: mek, caption: teks})
buffer = await getBuffer(anu.result.download)
MrG.sendMessage(from, buffer, audio, {quoted: mek})
break
//ApiKey Jojo
                    case 'trendtwit':
					MrG.updatePresence(from, Presence.composing) 
                     if (!isUser) return reply(mess.only.userB)
               				
                     if (isLimit(sender)) return reply(limitend(pushname))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					reply(mess.wait)
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
				break 
			case 'ytmp4'://UPDATE MR108P
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					MrG.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					MrG.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
				break 
				case 'ytmp3'://UPDATE MR108P
                    if (!isRegistered) return reply(ind.noregis())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Size* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					MrG.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					MrG.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
					case 'tiktod':
			  case 'tiktok':
					case 'tiktok':
				if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
                    url = args[0]
					url =`http://api.lolhuman.xyz/api/tiktok?apikey=Apikey&url=https://vt.tiktok.com/ZSwWCk5o/${url}`
					result = await fetchJson(url)
                    buffer = await getBuffer(result.result.link)
                    MrG.sendMessage(from, buffer, video, { quoted: mek })
                    break
					case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return MrG.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    MrG.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
				break
				case 'watercolor'://UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`Contoh: ${prefix}glowneon Mr.108P`)
arnando = body.slice(11)
reply(ind.wait())
glown = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${arnando}`)
MrG.sendMessage(from, glown, image, {quoted: mek})
await limitAdd(sender)
break
				case 'map'://UPDATE MR108P
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               	 anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
               	 buffer = await getBuffer(anu.gambar)
              	  MrG.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
				break
//Apikey hujanapi\\
case 'teamlogo'://UPDATE MR108P
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix} 8bit ArnandoGanz`)
   du = `${body.slice(10)}`
  ted1 = du.split("/")[0];
  ted2 = du.split("/")[1];
    reply(ind.wait())
nan = await getBuffer(`https://hujanapi.herokuapp.com/api/teamlogo?text=${ted1}&logo=${ted2}&apikey=trial2k21`)
MrG.sendMessage(from, nan, image, {quoted: mek})
await limitAdd(sender)
break
case 'linesticker'://UPDATE MR.108P ////UPDATE MR108P
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/linesticker?link=${args[0]}&apikey=apivinz`, {method: 'get'})
dung = (anu.sticker)
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	if (err) return reply('Error cok')
						fs.unlinkSync(ranp)
						
						buffer = fs.readFileSync(rano)
						costum(buffer, sticker, tescuk, `Judul Sticker : ${anu.title}`)
						
						fs.unlinkSync(rano)
					})
break
case 'igstory'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/igs?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
teks = '𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n'
					for (let i of anu.data) {
						teks += `Username : ${anu.username}
Total story : ${anu.stories_count}
Tipe : ${i.type}
Story : ${i.url}
Swipe Up Link : ${i.swipeUpLink}\n\n𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n`
					}
					reply(teks.trim())
break
case 'mediafire'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nama File : ${anu.name_file}
File Size : ${anu.file_size}
Tanggal Upload : ${anu.upload_date}
File Tipe : ${anu.file_type}
Link Download : ${anu.download}
Deskripsi : ${anu.description}`
MrG.sendMessage(from, teks, text, {quoted: mek})
costum(buffer, MessageType.document)
break
//Random Api
case 'fml'://UPDATE MR.108P	//UPDATE MR108P
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/fml`)
					hasil = data.result
					reply(hasil)
					break
case 'quran'://UPDATE MR.108P //UPDATE MR108P
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
					quran = `*->* ${anu.result.arti}\n*->* ${anu.result.asma}\n*->* ${anu.result.ayat}\n*->* ${anu.result.keterangan}\n*->* ${anu.result.nama}\n*->* ${anu.result.nomor}\n*->* ${anu.result.rukuk}\n*->* ${anu.result.type}\n*->* ${anu.result.urut}`
					MrG.sendMessage(from, quran, text, {quoted: mek})
					
					break
case 'estetik'://UPDATE MR.108P //UPDATE MR108P			
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result.result)
					MrG.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'darkjokes'://UPDATE MR.108P //UPDATE MR108P
					anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					MrG.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'memeindo'://UPDATE MR.108P //UPDATE MR108P			
					anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					MrG.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'nekonime'://UPDATE MR.108P //UPDATE MR108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
				reply('LOADING NGAB')
				anu = await fetchJson(`https://api.zeks.xyz/api/nekonime?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				MrG.sendMessage(from, buffer, image, {quoted: mek})
				break
case 'pantun'://UPDATE MR.108P
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					break
case 'quotes'://UPDATE MR.108P
					 // Fix Bug By ItsmeikyXSec404				
                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/quote?apikey=apivinz`)
					cop = `Quotes : _${data.result.quotes}_\n\nAuthor : _${data.result.author}_`
					reply(cop)
					break
					case 'nickepep'://UPDATE MR.108P //UPDATE MR108P 
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '𝗡𝗶𝗰𝗸 𝗘𝗽𝗲𝗽\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n\n𝗡𝗶𝗰𝗸 𝗘𝗽𝗲𝗽\n`
					}
					reply(teks.trim())
					break
					//Berita
case 'tribunnews'://UPDATE MR.108P //UPDATE MR108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '𝗧𝗿𝗶𝗯𝘂𝗻 𝗻𝗲𝘄𝘀\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Time* : ${i.time}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n\n𝗧𝗿𝗶𝗯𝘂𝗻 𝗻𝗲𝘄𝘀\n`
					}
					reply(teks.trim())
					break
case 'liputan'://UPDATE MR.108P //UPDATE MR108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    reply(ind.wait())
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '𝗟𝗶𝗽𝘂𝘁𝗮𝗻\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n\n𝗟𝗶𝗽𝘂𝘁𝗮𝗻\n`
					}
					reply(teks.trim())
					break
case 'foxnews'://UPDATE MR.108P //UPDATE MR108P
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '𝗙𝗼𝘅 𝗻𝗲𝘄𝘀\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Time* : ${i.time}\n*Content* : ${i.content}\n\n𝗙𝗼𝘅 𝗻𝗲𝘄𝘀\n`
					}
					reply(teks.trim())
					break
					//Nulis 
case 'nulis'://UPDATE MR.108P ////UPDATE MR108P //Nulisnya jgn pake spasi tapi pake %20
reply('Sabar Bro Lagi nulis')
teks = body.slice(7)
buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'nulis2'://UPDATE MR.108P ////UPDATE MR108P //Nulisnya jgn pake spasi tapi pake %20
reply('Wait.....')
teks = body.slice(8)
buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'nulis3'://UPDATE MR.108P ////UPDATE MR108P //Nulisnya jgn pake spasi tapi pake %20
reply('tunggu sebentar⏳')
teks = body.slice(3)
buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${teks}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
//Searching
case 'playstore'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${body.slice(11)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/znvZ20B/9b667c9d4b1b.jpg`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
teks = '𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲\n'
for (let i of anu.result) {
teks = `Nama Apk : ${i.title}
App ID : ${i.appid}
Developer : ${i.developer}
Price : ${i.price}
Rate : ${i.rating}
Url Apk : ${i.url}

𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲
`
}
reply(teks.trim())
break
case 'searchsticker'://UPDATE MR.108P ////UPDATE MR108P
case 'searchstiker'://UPDATE MR.108P ////UPDATE MR108P
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Nama Sticker : ${anu.title}`
dung = (anu.sticker)
MrG.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	if (err) return reply('Error cok')
						fs.unlinkSync(ranp)
						
						buffer2 = fs.readFileSync(rano)
						costum(buffer2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
						
						fs.unlinkSync(rano)
					})
break
case 'igstalk'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(anu.profile_pic)
teks = `Username : ${anu.username}
Fullname : ${anu.fullname}
Follower : ${anu.follower}
Following : ${anu.following}
Verified : ${anu.is_verified}
Bussiness : ${anu.is_bussiness}
Private : ${anu.is_private}
Link : https://www.instagram.com/${anu.username}
Bio : ${anu.bio}`
MrG.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
break
case 'shopee'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/yFZgntN/f9ab826750ea.jpg`)
teks = '𝗦𝗛𝗢𝗣𝗘𝗘\n'
					for (let i of anu.data) {
						teks += `Nama barang : ${i.name}
HMrG : ${i.hMrG}
Terjual : ${i.terjual}
Lokasi : ${i.location}
Cover : ${i.cover}
Stock : ${i.stock}
Informasi : ${i.information}
Url : ${i.url}
Deskripsi : ${i.desc}\n\n𝗦𝗛𝗢𝗣𝗘𝗘
`
}
MrG.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break
case 'ytsearch'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/yts?q=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/XyS1DLw/cdfbdf66f07b.jpg`)
teks = '𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Uploader : 
Nama Channel : ${i.uploader.username}
Url Channel : ${i.uploader.url}
Verified : ${i.uploader.verified}

Video :
Nama Video : ${i.video.title}
Url : ${i.video.url}
Durasi : ${i.video.duration}
Deskripsi : ${i.video.snippet}
Tanggal Upload : ${i.video.upload_date}
Views : ${i.video.views}\n\n𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝘀𝗲𝗮𝗿𝗰𝗵
`
					}
					MrG.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break
case 'neonime'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nama Neonime : ${i.title}
Link : ${i.link}
Deskripsi : ${i.desc}\n\n𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
					}
					reply(teks.trim())
break
case 'kbbi'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/kbbi?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
teks = `Arti : Dari ${body.slice(6)} ${anu.result}
Source : ${anu.source}`
MrG.sendMessage(from, teks, text, {quoted: mek})
break
case 'apkpure'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nama Apk : ${i.title}
Url : ${i.url}
Rating : ${i.rating}\n\n𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'igsearch'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${body.slice(8)}`, {method: 'get'})
teks = '𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Username : ${i.username}
Private : ${i.private_user}
Verified : ${i.verified_user}
Link : https://www.instagram.com/${i.username}\n\n𝗜𝗻𝘀𝘁??𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'wiki'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/wiki?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
teks = `${anu.result.result}`
MrG.sendMessage(from, teks, text, {quoted: mek})
break
case 'film2'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
teks = '𝗙𝗶𝗹𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nama Film : ${i.title}
Url : ${i.url}\n\n𝗙𝗶𝗹𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'film'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/film?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
teks = '𝗙𝗶𝗹𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nama Film : ${i.title}
Url : ${i.url}\n\𝗙𝗶𝗹𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'kusonime':
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=Apikey&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    MrG.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
case 'komik'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/bacakomik?apikey=apivinz&q=${body.slice(7)}`, {method: 'get'})
teks = '𝗞𝗼𝗺𝗶𝗸 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nama Komik : ${i.title}
Rating : ${i.rating}
Url : ${i.url}\n\n𝗞𝗼𝗺𝗶𝗸 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'happymod'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${body.slice(10)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵\n'
					for (let i of anu.result) {
						teks += `Nama Apk : ${i.title}
Rating : ${i.rating}
Url : ${i.url}\n\n𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
case 'spamcall':
          if (isBanned) return reply(nad.baned())
          //UPDATE MR.108P
          if (isLimit(sender)) return reply(nad.limitend(pusname))
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			MrG.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'spamgmail':
           if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
           if (isLimit(sender)) return reply(nad.limitend(pusname))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			MrG.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break 
case 'dorking':
				if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				reply(ind.wait())
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					MrG.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode64':
			if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				MrG.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':
				if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					MrG.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':
				if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					MrG.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':
				if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					MrG.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':
				if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					MrG.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':
				if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					MrG.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':
				if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					MrG.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':
				if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					MrG.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':
				if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=NjwVOz-eIM4XL-DUk83R-lufUG0-CnQecB&string=${becry}`, {method: 'get'})
				MrG.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':
					if (isBanned) return reply(nad.baned())
           //UPDATE MR.108P
					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  MrG.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
//kuis
case 'tebakgambar':
			         //UPDATE MR.108P			
                 //UPDATE MR.108P
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					MrG.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					MrG.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
//other
case 'sidshort'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${args[0]}`, {method: 'get'})
teks = `Short : ${anu.short}
Long : ${anu.long}
Create at :
Tanggal : ${anu.created_at.date}
Timezone Tipe : ${anu.created_at.timezone_type}
Timezone : ${anu.created_at.timezone}`
MrG.sendMessage(from, teks, text, {quoted: mek})
break
case 'simi'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${body.slice(6)}`, {method: 'get'})
teks = `${anu.result}`
MrG.sendMessage(from, teks, text, {quoted: mek})
break
case 'surah'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
if (args.length < 1) return reply('Surah ke?')
anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
teks2 = `Surah : ${anu.surah}
Arab : ${anu.asma}
Surah Nomor : ${anu.no}
Diturunkan di : ${anu.type}
Arti : ${anu.ket}
Jumlah ayat : ${anu.jumlah_ayat}`
MrG.sendMessage(from, teks2, text, {quoted: mek})
teks = '𝗔𝘆𝗮𝘁\n'
					for (let i of anu.ayat) {
teks += `Ayat ke : ${i.number}
Arab : ${i.text}
Latin EN : ${i.translation_en}
Latin ID : ${i.translation_id} \n\n`
}
reply(teks.trim())
buffer = await getBuffer(anu.audio)
MrG.sendMessage(from, buffer, audio, {quoted: mek})
break
case 'say'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/qrdecode?apikey=apivinz&image=https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(body.slice(8))}&size=220x220&margin=0`, {method: 'get'})
teks = `${anu.result}`
MrG.sendMessage(from, teks, text, {quoted: mek})
break
case 'jadwaltv'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
teks = `Nama TV : ${body.slice(10)}
${anu.result}`
MrG.sendMessage(from, teks, text, {quoted: mek})
break
case 'urlshort'://UPDATE MR.108P ////UPDATE MR108P
case 'url'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${args[0]}&apikey=apivinz`, {method: 'get'})
teks = `${anu.result}`
MrG.sendMessage(from, teks, text, {quoted: mek})
break
case 'jadwalsholat'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${body.slice(14)}`, {method: 'get'})
teks = `${anu.data.string}`
MrG.sendMessage(from, teks, text, {quoted: mek})
break
case 'listdaerah'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=malang`, {method: 'get'})
teks = `${anu.listdaerah}`
MrG.sendMessage(from, teks, text, {quoted: mek})
break
//Maker 
case 'qrcode'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/qrencode?apikey=apivinz&text=${body.slice(8)}`)
MrG.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'barcode'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/barcode?apikey=apivinz&text=${body.slice(9)}`)
MrG.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'emoji'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
teks = emojiUnicode(body.slice(7))
buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${teks}`)
MrG.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'slapimage'://UPDATE MR.108P ////UPDATE MR108P
try {
					profil = await MrG.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
buffer = await getBuffer(`https://api.zeks.xyz/api/slap?apikey=apivinz&img1=${profil}&img2=https://img.tek.id/img/content/2019/06/01/16833/whatsapp-tak-lagi-bisa-simpan-foto-profil-C7fSwKVQ2i.jpg`)
MrG.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'phkomen'://UPDATE MR.108P ////UPDATE MR108P
                tahta = body.slice(9)
                ja = tahta.split("|")[0];
			    rak = tahta.split("|")[1];
	    var imgbb = require('imgbb-uploader')
			ghost = MrG.participant
               try {
          pp = await MrG.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                      } catch {
       pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                         }
    media = await getBuffer(pp)
   datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
   fs.writeFileSync('getpp.jpeg', datae, 'base64')
   res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
      if (args.length < 1) return reply('Teksnya mana gan??')
   if (args.length > 10) return reply('karakter minimal 10')
   buff = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=benbenz&img=${res.display_url}&username=${ja}&msg=${rak}`, {method: 'get'})
   MrG.sendMessage(from, buff, image, {quoted: MrG, caption: `*${ja}* : ${rak}`})                
	break
//Photooxy
case 'hartatahta':
				//UPDATE MR.108P
				//RIU GAY NGAB
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Teksnya Mana Cuy?\nContoh : ${prefix}hartatahta DappaGanz`)
				dapuhy = body.slice(11)
				reply(ind.wait())
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				MrG.sendMessage(from, asu, image, {quoted: mek})
				await limitAdd(sender)
				break
case 'blueneon'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${body.slice(10)}`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'matrix'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${body.slice(8)}`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'breakwall'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${body.slice(11)}`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'greenneon'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/gneon?apikey=apivinz&text=${body.slice(11)}`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'dropwater'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${body.slice(11)}`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'wolflogo'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(10)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${wolf}&text2=${logo}`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'flowertext'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/flowertext?text=${body.slice(12)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'crosslogo'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'silktext'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/silktext?text=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'flametext'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/flametext?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'glowtext'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/glowtext?text=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'smoketext'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/smoketext?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'pubglogo'://UPDATE MR.108P ////UPDATE MR108P
case 'pubg'://UPDATE MR.108P
//UPDATE MR.108P
  if (isLimit(sender)) return reply(ind.limitend(pusname))
  if (args.length < 1) return reply(`Contoh: ${prefix}battelfiel ArnandoGanz`)
   du = `${body.slice(9)}`
  ted1 = du.split("/")[0];
  ted2 = du.split("/")[1];
    reply(ind.wait())
    nan = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${ted1}&text2=${ted2}`)
  MrG.sendMessage(from, nan, image, {quoted: mek})
     await limitAdd(sender)
     break
case 'skytext'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/skytext?text=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
//photo funia
case 'lighttext'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/lithgtext?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'retrotext'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(11)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
retro = wolflogo.split("|")[2];
anu = await fetchJson(`https://api.zeks.xyz/api/retro?text1=${wolf}&text2=${logo}&text3=${retro}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'crismes'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/crismes?text=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'snowwrite'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(11)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/snowwrite?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'watercolor'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(12)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/watercolour?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(anu.result)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'firework'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${body.slice(10)}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'sandwrite'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${body.slice(11)}`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
//Ephoto
case 'epep'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/epep?text=${body.slice(6)}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'gplaybutton'://UPDATE MR.108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${body.slice(13)}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'splaybutton'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${body.slice(13)}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
//text pro
case 'text3dbox'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${body.slice(11)}`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'text3d'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${body.slice(8)}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'phlogo'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(8)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
buffer = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${wolf}&text2=${logo}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'bplogo'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${body.slice(8)}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'leavestext'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${body.slice(12)}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'textlight'://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
buffer = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${body.slice(11)}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'glitchtext '://UPDATE MR.108P ////UPDATE MR108P
if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
reply(ind.wait())
wolflogo = body.slice(11)
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/gtext?text1=${wolf}&text2=${logo}&apikey=apivinz`)
MrG.sendMessage(from, buffer, image, {quoted: mek})
break
case 'ytmp3'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3?url=${args[0]}&apikey=apivinz`, {method: 'get'})
thumbnail = await getBuffer(anu.result.thumbnail)
teks = `Judul : ${anu.result.title}
Size : ${anu.result.size}
*Mohon Tunggu Sebentar lagi dikirim*
Ni link audio lewat linknya kak : 
${anu.result.url_audio}`
MrG.sendMessage(from, thumbnail, image, {quoted: mek, caption: teks})
buffer = await getBuffer(anu.result.url_audio)
MrG.sendMessage(from, buffer, audio, {quoted: mek})
break
case 'ytmp4'://UPDATE MR.108P ////UPDATE MR108P
anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${args[0]}&apikey=apivinz`, {method: 'get'})
thumbnail = await getBuffer(anu.result.thumbnail)
teks = `Judul : ${anu.result.title}
Size : ${anu.result.size}
*Mohon Tunggu Sebentar lagi dikirim*
Ni link video lewat linknya kak : 
${anu.result.url_video}`
MrG.sendMessage(from, thumbnail, image, {quoted: mek, caption: teks})
buffer = await getBuffer(anu.result.url_video)
MrG.sendMessage(from, buffer, video, {quoted: mek, caption: 'Nih :)'})
break
case 'asupan':
if (isBanned) return reply(mess.only.benned)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=Apikey`)
                    buffer = await getBuffer(get_result.result)
                    MrG.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" , caption: 'Subscribe MR108P'})
                    break
                    case 'kpop'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Kpop`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					MrG.sendMessage(from, nye, image, { caption: 'ihh plastik!!', quoted: mek })
					await limitAdd(sender)
					break 
case 'neko'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=neko loli`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					MrG.sendMessage(from, nye, image, { caption: 'kyaa one chan!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'anime':
                   if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
			       if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+loli`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'Wibu!!!', quoted: mek })
					await limitAdd(sender) 
					break
                    case 'anime2':
                   if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply(ind.baned())
			       if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+loli`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'Dasar Wibu!!!', quoted: mek })
					await limitAdd(sender) 
					break 
                    case 'pokemon'://UPDATE MR.108P
            if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Pokemon`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					MrG.sendMessage(from, nye, image, { caption: 'Subscribe Mr108P', quoted: mek })
					await limitAdd(sender)
					break
					case 'pinterest':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					MrG.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					MrG.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
					await limitAdd(sender)
					break 
					case 'anjing'://UPDATE MR.108P
					if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					MrG.sendMessage(from, nye, image, { caption: 'Subscribe Mr108P', quoted: mek })
					await limitAdd(sender)
					break
					case 'kucing'://UPDATE MR.108P
					if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					MrG.sendMessage(from, nye, image, { caption: 'Subscribe Mr108P', quoted: mek })
					await limitAdd(sender)
					break
            case 'naruto'://UPDATE MR.108P
            if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					MrG.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					MrG.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					MrG.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
			case 'hinata'://UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					MrG.sendMessage(from, nye, image, { caption: '*HINATA HYOUGA*', quoted: mek })
					await limitAdd(sender)
					break  
				case 'sasuke'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					MrG.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kaneki'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Kaneki-ken`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'Pyschopet kata Ilham', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					MrG.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'randomhentai'://UPDATE MR.108P
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isNsfw) return reply(ind.nsfwoff())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
                         gatauda = body.slice(12)
					     reply(ind.wait())
                     anu = await fetchJson(`https://api.shizukaa.xyz/api/randomimage?apikey=itsmeiky633`, {method: 'get'})
                       buffer = await getBuffer(anu.result)
                MrG.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
                                        break
				case 'rize'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					MrG.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					MrG.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					MrG.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
		case 'miku'://UPDATE MR.108P
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Nakano Miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					MrG.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break
case 'rem'://UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'rem waifu owner', quoted: mek })
					await limitAdd(sender) 
					break
					case 'sagiri':
			if (isBanned) return reply(ind.baned())
			//UPDATE MR.108P
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sagiri`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'sagiri lont*', quoted: mek })
					await limitAdd(sender) 
					break
   case 'yotsuba'://UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=yotsuba`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'Kawaii kan', quoted: mek })
					await limitAdd(sender) 
					break
case 'animesad'://UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime sad`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'Dah lah..', quoted: mek })
					await limitAdd(sender) 
					break
case 'rikka'://UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rikka`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'Kawaii kan', quoted: mek })
					await limitAdd(sender) 
					break
					case 'ohto'://UPDATE MR.108P
            if (!isRegistered) return reply(ind.noregis())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Ohto Ai`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					MrG.sendMessage(from, nye, image, { caption: 'Kawaii >_<!!', quoted: mek })
					await limitAdd(sender)
					break
           case 'megumin'://UPDATE
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/megumin?apikey=Apikey`, {method: 'get'})
					MrG.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'shinobu'://UPDATE
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/shinobu?apikey=Apikeyluh`, {method: 'get'})
                    buffer = await getBuffer(anu.result.url)
					MrG.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
case 'loli'://UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'Kawaii kan', quoted: mek })
					await limitAdd(sender) 
					break
					case 'pictlolicon'://UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Loli kawaii`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'One chan >_<', quoted: mek })
					await limitAdd(sender) 
					break
case 'randomanime'://UPDATE MR.108P
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())	
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					MrG.sendMessage(from, nye, image, { caption: 'Nihh', quoted: mek })
					await limitAdd(sender) 
					break 
case 'waifukawai'://UPDATE MR.108P
				    try {
					reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					MrG.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
			case 'kemonomimi'://UPDATE MR.108P
				    try {
	   			reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					MrG.sendMessage(from, buf, image, {quoted: mek,caption: "ONII CHAN BAKA!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
		case 'kuni'://UPDATE MR.108P
				    try {
					if (!isPrem) return reply(ind.premium())
					reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					MrG.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN*!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break 
				case 'nsfwloli3'://UPDATE MR.108P
				   if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=neko loli`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					MrG.sendMessage(from, nye, image, { caption: 'kyaa one chan!!', quoted: mek })
					await limitAdd(sender)
					break 
		case 'neko2'://UPDATE MR.108P
				   try {
				reply(ind.wait())	
					axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
				MrG.sendMessage(from, buf, image, {quoted: mek,caption: "NYANG!!"})
					})})
					} catch (e) {
				console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
      case 'holo'://UPDATE MR.108P
				    try {
					reply(ind.wait())
						axios.get(`https://nekos.life/api/v2/img/holo`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					MrG.sendMessage(from, buf, image, {quoted: mek,caption: "NIH OM!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('тЭМ *ERROR* тЭМ')
					}
					break
//Xteam
case 'suit':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length < 1) return lolteam.sendMessage(from, 'Cara bermain: zsuit type\n\nContoh: zsuit gunting', text, {quoted: lol})

		        query = args.join(" ")
                    get_result = await fetchJson(`https://api.xteam.xyz/game/suit?q=${query}&APIKEY=Fuzbot1`)
                    init_txt = `Hasil : ${get_result.hasil}\n`
                    init_txt += `Jawaban Mu: ${get_result.jawabanmu}\n`
                    init_txt += `Jawaban Bot: ${get_result.jawabanbot}\n`
                    init_txt += `Poin : ${get_result.poin}\n`
                    reply(init_txt)
                    break
                //ONLY DEV\\
     case 'anakharamserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti ArnandoGanz*`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'hekelserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}hekel ArnandoGanz*`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'babuserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}babu ArnandoGanz*`)
				reply(ind.wait())
				ct = body.slice(10)
				anu = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'ffserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(8)
				anu = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'bucinserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'bocilepepserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'gayserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(9)
				anu = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'pacarserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'sadboyserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'surgaserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'pinterserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'badgirlserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'badboyserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badboyserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'goodgirlserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'goodboyserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodboyserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'editorberkelasserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				anu = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'goodlookingserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodlookingserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(17)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'fucekboyserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ArnandoGanz`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'jametserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'youtuberserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}youtuberserti MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'fftourserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'fftourserti2'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'fftourserti3'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'fftourserti4'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'fftourserti5'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'mltourserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'mltourserti2'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'mltourserti3'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'mltourserti4'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'mltourserti5'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'pubgtourserti'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'pubgtourserti2'://UPDATE MR.108P 				
				//UPDATE MR.108P
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'pubgtourserti3'://UPDATE MR.108P 				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'pubgtourserti4'://UPDATE MR.108P 				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 MrG{108P}`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
				case 'pubgtourserti5'://UPDATE MR.108P 				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 MrG{108P}`)
				reply(`[❕] Loading`)
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				MrG.sendMessage(from, anu, image, { quoted: mek, caption: 'Subscribe Mr.108P' })
				break
          //ISLAM MENU\\
case 'asmaulhusna'://UPDATE MR.108P
				MrG.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/asmaulhusna?apikey=Apikeyluh`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nomor:* : ${i.index}\n*Latin* : ${i.latin}\n*Arab* : ${i.arabic}\n*Translate Indo* : ${i.translation_id}\n*Translate English* : ${i.translation_en}\n=================\n`
				}
				reply(teks)
				break
case 'donasi':
				case 'donate':
				MrG.sendMessage(from, donasi(pushname, prefix), text)
					break
				case 'bingungcok':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P				
					MrG.sendMessage(from, cara(pushname, prefix, botName, ownerName), text)
					break	
case 'randomquran'://UPDATE MR.108P
       case 'quranaudio':
		    if (isBanned) return reply(mess.only.benned)   
			 if (!isUser) return reply(mess.only.userB)
			anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
			faktaaa = `*Nama* : *${anu.result.nama}*\n*Arti* : *${anu.result.arti}*\n*Nomor* : *${anu.result.nomor}*\n*Tipe* : *${anu.result.type}*\n*Ayat* : *${anu.result.ayat}*\n*Isi* : *${anu.result.keterangan}*`
			quu = await getBuffer(anu.result.audio)
			MrG.sendMessage(from, faktaaa, text, {quoted: mek})
			MrG.sendMessage(from, quu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.nama}.mp3`, quoted: mek})
			await limitAdd(sender) 
				break
				case 'ttp':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			//UPDATE MR.108P
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp udin supri*`)
				nan = await fetchJson(`https://api.xteam.xyz/ttp?file&text=${body.slice(5)}`)
				MrG.sendMessage(from, nan, sticker, {quoted: mek})
				break
				case 'ttp2':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			//UPDATE MR.108P
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp2 alok lah*`)
				nan = await fetchJson(`https://api.xteam.xyz/ttp?file&text=${body.slice(6)}`)
				MrG.sendMessage(from, nan, sticker, {quoted: mek})
				break
				case 'ttp3':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			//UPDATE MR.108P
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp3 arnando ngegay sama arya*`)
				nan = await fetchJson(`https://api.xteam.xyz/ttp?file&text=${body.slice(6)}`)
				MrG.sendMessage(from, nan, sticker, {quoted: mek})
				break
				case 'ttp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			//UPDATE MR.108P
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp4 Riu ngegay sama sofyan*`)
				nan = await fetchJson(`https://api.xteam.xyz/ttp?file&text=${body.slice(6)}`)
				MrG.sendMessage(from, nan, sticker, {quoted: mek})
				break
 case 'attp':
        if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			//UPDATE MR.108P
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				MrG.sendMessage(from, attp2, sticker, {quoted: mek})
				break
case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar kak >_<')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await MrG.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
				    MrG.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kak [(^.^)]'})
				   fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
//GROUP MENU\\
case 'welcome':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*FITUR WELCOME SUDAH AKTIF KAK*')
						welkom.push(from)
						fs.writeFileSync('./owner/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR WELCOME DI GROUP*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./owner/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUKSES」 MEMATIKAN FITUR WELCOME DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
case 'blackpink':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//RIU GAY NGAB
				if (!isPrem) return reply(ind.premium())
pink = body.slice(11)
reply('Sabar ya gan....')
anu = await fetchJson(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					MrG.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break				
                 case 'event':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())                 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF BOS*')
						event.push(from)
						fs.writeFileSync('./owner/group/event.json', JSON.stringify(event))
						reply('*「SUKSES」 MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./owner/group/event.json', JSON.stringify(event))
						reply('*「SUKSES」 MEMATIKAN EVENT DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :ЁЭШГ')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./owner/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./owner/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'simih':
                  case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 !!!')
						samih.push(from)
						fs.writeFileSync('./owner/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮??𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴??𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./owner/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️️')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ekhem >_<')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./owner/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUKSES」 MENGAKTIFKAN FITUR NSFW DI GROUP*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./owner/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUKSES」 MEMATIKAN FITUR NSWF DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
case 'delete'://UPDATE
					case 'del':
					case 'd':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					MrG.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return MrG.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return MrG.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						MrG.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						MrG.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return MrG.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						MrG.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						MrG.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return MrG.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return MrG.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					MrG.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						MrG.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						MrG.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						MrG.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						MrG.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
                                case 'antilinkgrup':
                  if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						antilink.push(from)
						fs.writeFileSync('./owner/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./owner/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTILINK*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'admin':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//RIU GAY NGAB
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'grup':
					case 'group':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())					
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						MrG.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						MrG.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'add':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//RIU GAY NGAB
				if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						MrG.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					break
			     	case 'kick':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//RIU GAY NGAB
				if (isLimit(sender)) return reply(ind.limitend(pusname))			     	
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁??𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						MrG.groupRemove(from, mentioned)
					} else {
						mentions(`Bismillah atas izin admin grup kamu akan saya tendang @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						MrG.groupRemove(from, mentioned)
					}
					break
                case 'hidetag':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())                
                //RIU GAY NGAB
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await MrG.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					MrG.sendMessage(from, options, text)
					await limitAdd(sender)
					break					
                case 'level':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())                
                //RIU GAY NGAB
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ LEVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
               MrG.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
                 case 'linkgrup':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//RIU GAY NGAB
				if (isLimit(sender)) return reply(ind.limitend(pusname))                
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await MrG.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    MrG.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				//RIU GAY NGAB
				if (isLimit(sender)) return reply(ind.limitend(pusname))		
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
           case 'setname':
                //RIU GAY NGAB           
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                MrG.groupUpdateSubject(from, `${body.slice(9)}`)
                MrG.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                //RIU GAY NGAB                
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                MrG.groupUpdateDescription(from, `${body.slice(9)}`)
                MrG.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Desk Grup', text, {quoted: mek})
					break
           case 'demote':
                //RIU GAY NGAB           
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						MrG.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						MrG.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
                //RIU GAY NGAB				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						MrG.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						MrG.groupMakeAdmin(from, mentioned)
					}
					break
				case 'hedsot':
                //RIU GAY NGAB				
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						MrG.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						MrG.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						MrG.groupRemove(from, mentioned)
						}
					break
                 case 'fitnah':		
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("/")[0];
					var target = gh.split("/")[1];
					var bot = gh.split("/")[2];
					MrG.sendMessage(from, `${bot}`, text, {quoted: { mek: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
                      case 'leave':
                      if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())      
                      //RIU GAY NGAB           
                      if (!isGroup) return reply(ind.groupo())
                      if (!isGroupAdmins) return reply(ind.admin())
                      setTimeout( () => {
                      MrG.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      MrG.updatePresence(from, Presence.composing) 
                      //RIU GAY NGAB
                      if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())   
                      MrG.sendMessage(from, 'Aku pamit kak:)', text)
                      }, 0)
                      break
//OWNER MENU
case 'mining':
                      //RIU GAY NGAB
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner  MrG{108P}*`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena Elana bot -x Baik Bot memberikan ${one}Xp >_<`)
                      }else{
                     const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
					case 'info':
					me = MrG.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*OWNER* : *MR.108P*\n*AUTHOR* : MR.108P\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					MrG.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'admin':
            case 'owner':
            case 'creator':
                  MrG.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  MrG.sendMessage(from, 'Ini owner saya Jangan lupa Subscribe Mr.108P*...',MessageType.text, { quoted: mek} )
tod = await getBuffer(`https://i.ibb.co/Vm5FHxc/IMG-20210312-WA1759.jpg`)
 MrG.sendMessage(from, tod, image, { quoted: mek, caption: '*Ini waifu owner saya,jangan luh ambil,kalau luh ambil,yok gass gelud!!*'})
                     break
                     case 'listnotoxic':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break
case 'addnotoxic':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addnotoxic [kata kasar]. contoh ${prefix}addnotoxic bego`)
                    const add = body.slice(12)
                  .push(bw)
                    fs.writeFileSync('./owner/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'dellnotoxic':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addnotoxic [kata kasar]. contoh ${prefix}addnotoxic bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./owner/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus No Toxic')
                    break
case 'notoxic':
                  if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                 return reply('*fitur NoToxic sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./owner/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./owner/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                case 'addprem':
					if (!isOwner) return reply(ind.ownerb())
					addp = body.slice(10)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./owner/user/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menambahkan wa.me/${addp} Ke Daftar Premium`)
					break
				case 'dellprem':
					if (!isOwner) return reply(ind.ownerb())
					delp = body.slice(11)
					premium.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./owner/user/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break					
				case 'bc':
					MrG.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await MrG.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await MrG.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							MrG.sendMessage(_.jid, buff, image, {caption: `*「 REM BOT 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 REM BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await MrG.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							MrG.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`})
						}
						reply('*「 SUKSES BOSKU 」*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    MrG.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*「 SUKSES 」* Prefix jadi ➸ : ${prefix}`)
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await MrG.chats.all()
					MrG.setMaxListeners(25)
					for (let _ of anu) {
						MrG.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 MrG.updatePresence(from, Presence.composing) 
				 MrG.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					MrG.blockUser (`${body.slice(7)}@c.us`, "add")
					MrG.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    MrG.blockUser (`${body.slice(9)}@c.us`, "remove")
					MrG.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    MrG.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await MrG.downloadAndSaveMediaMessage(enmedia)
					await MrG.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya bosku😗')
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg())
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await MrG.getProfilePicture(id)
						buffer = await getBuffer(pp)
						MrG.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
                case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./owner/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./owner/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
//LIMIT MENU\\
case 'limit':
		if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				   //RIU GAY NGAB
				   checkLimit(sender)
					break
				case 'transfer':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())				
				//RIU GAY NGAB
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6285559240360@s.whatsapp.net', fee)
                reply(`*⟪ SUKSES ⟫*\n\npengiriman uang berhasil\n➸ dari : +${sender.split("@")[0]}\n➸ ke : +${tujuan}\n➸ jumlah transfer : ${jumblah}\n➸ pajak : ${fee}`)
                break
				case 'atm':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())				
				//RIU GAY NGAB
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
                  if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())				
				//RIU GAY NGAB
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*⟪ PEMBAYARAN BERHASIL ⟫*\n\n➸ pengirim : RemBot\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${payout} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
				} 
				break
				case 'sound1':
satu = fs.readFileSync('./sound/sound1.mp3');
MrG.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./sound/sound2.mp3');
MrG.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./sound/sound3.mp3');
MrG.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./sound/sound6.mp3');
MrG.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
if (!isPrem) return reply(ind.premium())
tujuh = fs.readFileSync('./sound/sound7.mp3');
MrG.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('./sound/sound8.mp3');
MrG.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./sound/sound9.mp3');
MrG.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./sound/sound10.mp3');
MrG.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'sound11':
duabelas = fs.readFileSync('./sound/sound11.mp3');
MrG.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
empatbelas = fs.readFileSync('./sound/sound12.mp3');
MrG.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
limabelas = fs.readFileSync('./sound/sound13.mp3');
MrG.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
enambelas = fs.readFileSync('./sound/sound14.mp3');
MrG.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
tujuhbelas = fs.readFileSync('./sound/sound15.mp3');
MrG.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
delapanbelas = fs.readFileSync('./sound/sound16.mp3');
MrG.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
sembilanbelas = fs.readFileSync('./sound/sound17.mp3');
MrG.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
duasatu = fs.readFileSync('./sound/sound18.m4a');
MrG.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
duatiga = fs.readFileSync('./sound/sound19.m4a');
MrG.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bernyanyi':
const bernyanyi = fs.readFileSync('./sound/bernyanyi.mp3');
MrG.sendMessage(from, bernyanyi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tratata':
const tratata = fs.readFileSync('./sound/tratata.mp3');
MrG.sendMessage(from, tratata, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'kebenaran':
const kebenaran = fs.readFileSync('./sound/kebenaran.mp3');
MrG.sendMessage(from, kebenaran, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sad':
const sad = fs.readFileSync('./sound/sad.mp3');
MrG.sendMessage(from, sad, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sad2':
const sad1 = fs.readFileSync('./sound/sad1.mp3');
MrG.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sad3':
const sad3 = fs.readFileSync('./sound/sad3.mp3');
MrG.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'iri':
const irimp3 = fs.readFileSync('./sound/iri.mp3');
MrG.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('sound/pale.mp3')
MrG.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'gam2piri':
const soun = fs.readFileSync('sound/sound.mp3')
MrG.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'akusukakamu':
satu = fs.readFileSync('./sound/sound1.mp3');
MrG.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'cidro2':
tiga = fs.readFileSync('./sound/sound3.mp3');
MrG.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./sound/sound4.mp3');
MrG.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./sound/sound5.mp3');
MrG.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'candagodloking':
enam = fs.readFileSync('./sound/sound6.mp3');
MrG.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'babycute':
if (!isPrem) return reply(ind.premium())
tujuh = fs.readFileSync('./sound/sound7.mp3');
MrG.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'terpesona':
satu = fs.readFileSync('./sound/terpesona.mp3');
MrG.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'gajelas':
satu = fs.readFileSync('./sound/gajelas.mp3');
MrG.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ndabisabasaingris':
satu = fs.readFileSync('./sound/ndabisabasaingris.mp3');
MrG.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await MrG.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.8,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						MrG.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await MrG.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						MrG.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})

				break
				// PREMIUM
				case 'premiumlist':
					MrG.updatePresence(from, Presence.composing) 
                    //UPDATE MR.108P
					teks = `╭─「 *JUMLAH USER PREMIUM* 」\n`
					no = 0
					for (let prem of premium) {
						no += 1
						teks += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					teks += `│ Jumlah User Premium : ${premium.length}\n╰──────「 *REM BOT -X* 」`
					MrG.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
				case 'bokep':
			    	MrG.updatePresence(from, Presence.composing) 
            if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (!isPrem) return reply(ind.premium())
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('MENGEGE LUH OM,COLI MULU')
                 randTeks = randKey.teks
                 MrG.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
               case 'mutual':
                  if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (!isPrem) return reply(ind.premium())
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
            break
            case 'next':
                if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (!isPrem) return reply(ind.premium())
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
                break
                case 'blowjob':
                  if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						MrG.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'nangis':
                  if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('Sabar ya gan....')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						MrG.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'cium':
                  if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					reply('Sabar ya gan....')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						MrG.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'peluk':
                  if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (!isPrem) return reply(ind.premium())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
					reply('Sabar ya gan....')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						MrG.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'yutubdl':
					if (args.length < 1) return reply('Urlnya mana um?')
                  if (isBanned) return reply(ind.baned())
				//UPDATE MR.108P
				if (!isPrem) return reply(ind.premium())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')				
		        anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=LoliHunter`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ JUDUL* : ${anu.result.title}\n\n*[WAIT] Proses Dumlu Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					MrG.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					MrG.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
case 'blub':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await MrG.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						MrG.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
					case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await MrG.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						MrG.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await MrG.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					MrG.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fasst':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await MrG.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3/m4a/ptt')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.4,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('NGEN(uh)')
						hah = fs.readFileSync(ran)
						MrG.sendMessage(from, hah, audio, {mimetype: 'audio/mp3/ptt/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
	case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
                	MrG.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya kak ❌')
					reply(MrG.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m'))
					media = await MrG.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						bufferlkj = fs.readFileSync(ran)
						MrG.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				default:
if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
                  }
			if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
		if (budy.includes(`Ngentod`)) {
                  reply(`Jaga Omongan lapet`)
                  }
    if (budy.includes(`Woy`)) {
                  reply(`APA NJING!!`)
                  }
if (budy.includes(`Woy`)) {
                  reply(`APA NJING!!`)
                  }
		if (budy.includes(`Sayang`)) {
                  reply(`Aku Juga Sayang Kamu Kak😍`)
                  }
		if (budy.includes(`sayang`)) {
                  reply(`Aku Juga Sayang Kamu Kak😍`)
                  }
		if (budy.includes(`Thanks`)) {
                  reply(`Yoii santuy borr`)
                  }
		if (budy.includes(`Makasih`)) {
                  reply(`Yoii santuy borr`)
                  }
		if (budy.includes(`sendsticker`)) {
                const darkbot = fs.readFileSync('./sticker/darkbot');
                MrG.sendMessage(from, darkbot, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`@6281534162316`)) {
                  reply(`Jangan Tag Arnando Kak, Dia Lagi Sibuk ✨`)
                  }
if (budy.includes(`@6281227825649`)) {
                  reply(`Jangan Tag Sofyan Kak, Dia Lagi Sibuk ✨`)
                  }
		if (budy.includes(`Nico`)) {
                const nico = fs.readFileSync('./sticker/nico');
                MrG.sendMessage(from, nico, MessageType.sticker, {quoted: mek})
                  }
                  if (budy.includes(`nico`)) {
                const nico = fs.readFileSync('./sticker/nico');
                MrG.sendMessage(from, nico, MessageType.sticker, {quoted: mek})
                  }
                  if (budy.includes(`Tapi`)) {
                const tapi = fs.readFileSync('./sound/tapi.mp3');
                MrG.sendMessage(from, tapi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
            if (budy.includes(`tapi`)) {
                const tapi = fs.readFileSync('./sound/tapi.mp3');
                MrG.sendMessage(from, tapi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
			if (budy.includes(`Wibu`)) {
                const wibu = fs.readFileSync('./sound/wibu.mp3');
                MrG.sendMessage(from, wibu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
			if (budy.includes(`wibu`)) {
                const wibu = fs.readFileSync('./sound/wibu.mp3');
                MrG.sendMessage(from, wibu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
if (budy.includes(`yamete`)) {
                const yamete = fs.readFileSync('./sound/yamete.mp3');
                MrG.sendMessage(from, yamete, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
if (budy.includes(`Yamete`)) {
                const Yamete = fs.readFileSync('./sound/yamete.mp3');
                MrG.sendMessage(from, Yamete, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}
if (budy.includes(`tra`)) {
                const tra = fs.readFileSync('./sound/tratata.mp3');
                MrG.sendMessage(from, tra, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {
			}                				
			if (!isGroup && !isCmd) {
                        
				//reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

