const { smd, sleep } = require('../lib');

smd({ cmdname: "hack", type: "fun", info: "hacking prank", filename: __filename }, async (citel) => {
  const messages = [
    "Reverse King Injecting Malware",
    " ▓ 10%",
    " ▓ ▆ 20%",
    " ▓ ▆ ▅ 30%",
    " ▓ ▆ ▅ ▃ 40%",
    " ▓ ▆ ▅ ▃ ▂ 50%",
    " ▓ ▆ ▅ ▅ ▃ ▂ 60%",
    " ▓ ▆ ▅ ▓ ▅ ▅ ▃  70%",
    " ▓ ▆ ▅ ▓ ▓ ▆  ▃ ▂ 80%",
    " ▓ ▆ ▓ ▆ ▓ ▓  ▆ ▃ ▂ 90%",
    " ▓ ▆ ▆ ▓ ▓ ▓ ▆ ▅ ▃ ▂ ▁ 100%",
    "System hijacking on process.. \\n Conecting to Reverse King to find 404 ",
    "Device successfully connected... \\n Receiving data...",
    "Data hijacked from device 100% completed \\n killing all evidence killing all malwares...",
    " HACKING COMPLETED ",
    " SENDING LOG DOCUMENTS...",
    " SUCCESSFULLY SENT DATA AND Connection disconnected",
    "BACKLOGS CLEARED"
    "Reverse King responded anonymously
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});
