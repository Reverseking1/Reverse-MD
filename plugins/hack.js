const { smd, sleep } = require('../lib');

smd({
  cmdname: "hack",
  type: "fun",
  info: "hacking prank",
  filename: __filename
}, async (citel) => {
  const messages = [
    "Injecting Malware",
    "█ 10%",
    "█ █ 20%",
    "█ █ █ 30%",
    "█ █ █ █ 40%",
    "█ █ █ █ █ 50%",
    "█ █ █ █ █ █ 60%",
    "█ █ █ █ █ █ █ 70%",
    "█ █ █ █ █ █ █ █ 80%",
    "█ █ █ █ █ █ █ █ █ 90%",
    "█ █ █ █ █ █ █ █ █ █ 100%",
    "System hijacking on process...\nConnecting to Server error to find 404",
    "Device successfully connected...\nReceiving data...",
    "Data hijacked from device 100% completed\nKilling all evidence killing all malwares...",
    "HACKING COMPLETED",
    "SENDING LOG DOCUMENTS...",
    "SUCCESSFULLY SENT DATA AND Connection disconnected",
    "BACKLOGS CLEARED"
  ];

  let editedMessage = await citel.send(messages[0]);
  for (let i = 1; i < messages.length; i++) {
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, messages[i]);
  }
});
