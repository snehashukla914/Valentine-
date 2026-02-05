const story = {
  1: {
    text: "Chalo batao… tum mujhse kitna pyaar karti ho? 💕",
    options: [
      { text: "Bahut zyada 😍", next: 2 },
      { text: "Nahi karti main 🙄", next: 3 }
    ]
  },

  2: {
    text: "Kya baat hai, aaj bada pyaar aa raha hai? 😏",
    options: [
      { text: "Haan, ho hi tum itne pyaare 🥰", next: 4 },
      { text: "Niklo ab 😤", next: 5 }
    ]
  },

  3: {
    text: "Haan, ye toh pata tha ki tum yahi bologi 😌 Chalo, dance ki ek video bana ke bhejo 💃📱",
    options: [
      { text: "Haan haan, bhej rahi hoon 😆", next: 2 },
      { text: "Hatt! 🙅‍♀️", next: 6 }
    ]
  },

  4: {
    text: "Arre yaar! “Niklo ab” pe click karna tha na 😭 Iske aage ending hi nahi hai",
    options: [
      { text: "Thik hai, niklo ab 😅", next: 2 },
      
    ]
  },

  5: {
    text: "Pyaar nahi karti ho na? 😐",
    options: [
      { text: "Haan 😶", next: 6 }
    ]
  },

  6: {
    text: "Website par baat kar rahi ho, phir bhi pyaar nahi aa raha? 😔",
    options: [
      { text: "Acha thik hai, ab pyaar karungi ❤️", next: 7 },
      { text: "Phuto 😜", next: 7 }
    ]
  },

  7: {
    text: "Chalo ab point par aata hoon 😎 Batao… will you be my Valentine? 💘",
    options: [
      { text: "Yes ❤️", next: 8 },
      { text: "No 💔", next: 9 }
    ]
  },

  8: {
    text: "Ma’am, “No” par click kijiye 😌",
    options: [
      { text: "No", next: 7 }
    ]
  },

  9: {
    text: "Acha… iska matlab tum mujhse pyaar nahi karti ho? 🤨",
    options: [
      { text: "Haan, nahi karti hoon 😑", next: 10 },
      { text: "Karti hoon 😳", next: 11 }
    ]
  },

  10: {
    text: "Toh tum mujhse sirf isliye baat karti ho taaki mere favourite Lays ke packet chura sako? 😂(Instagram se chori kiya hua joke 😜)",
    options: [
      { text: "Haan 😏", next: 12 },
      { text: "apna Lays apne paas rakho 😏", next: 12 }
    ]
  },

  11: {
    text: "Valentine ban jao na babu ❤️ Warna aage ki logic mein “No” option hi hata dunga 😈 Soch lo…",
    options: [
      { text: "Nahi sochna 😎", next: 12 },
      { text: "Soch liya 🤔", next: 12 }
    ]
  },

  12: {
    text: "Acha, phir se puch raha hoon 😌 Will you be my Valentine? 💖",
    options: [
      { text: "Yes ❤️", next: 13 },
      { text: "No 💔", next: 14 }
    ]
  },

  13: {
    text: "Good girl 😄 Lekin is baar bhi “No” par hi click karna tha 😜",
    options: [
      { text: "No", next: 12 },
      
    ]
  },

  14: {
    text: "Agar Valentine nahi banogi toh mere bachchon ki maa kaise banogi? 😜 ",
    options: [
      { text: "Aise hi tumhare bachchon ki maa ban jaungi 😌", next: 15 },
      { text: "Nahi banna 😤", next: 15 }
    ]
  },

  15: {
    text: "Acha theek hai 😅 Last baar puch raha hoon… Will you be my Valentine? ❤️ (Is baar “Yes” hi click karna hoga, “No” option hi nahi hai 😌)",
    options: [
      { text: "Yes ❤️", next: 16 },
      
    ]
  },

  16: {
    text: "YAYYY! 🥳 So it’s official now 💍 My heart ❤️ = Yours This Valentine 💖",
    options: [] // STOP
  }
};

function loadStatement(id) {
  const statement = document.getElementById("statement");
  const optionsDiv = document.getElementById("options");

  statement.innerText = story[id].text;
  optionsDiv.innerHTML = "";

  story[id].options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    btn.onclick = () => loadStatement(option.next);
    optionsDiv.appendChild(btn);
  });
}

// start
loadStatement(1);
