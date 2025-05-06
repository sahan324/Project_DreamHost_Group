window.onload = () => {
    const h1Text = "𝐃𝐫𝐞𝐚𝐦𝐇𝐨𝐬𝐭";
    const pText = `"𝘿𝙧𝙚𝙖𝙢𝙃𝙤𝙨𝙩 — 𝙃𝙤𝙨𝙩𝙞𝙣𝙜 𝙔𝙤𝙪𝙧 𝘿𝙧𝙚𝙖𝙢𝙨, 𝙋𝙤𝙬𝙚𝙧𝙞𝙣𝙜 𝙔𝙤𝙪𝙧 𝙋𝙤𝙨𝙨𝙞𝙗𝙞𝙡𝙞𝙩𝙞𝙚𝙨. 𝙒𝙚 𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙚𝙫𝙚𝙧𝙮 𝙙𝙧𝙚𝙖𝙢 𝙙𝙚𝙨𝙚𝙧𝙫𝙚𝙨 𝙖 𝙥𝙡𝙖𝙩𝙛𝙤𝙧𝙢. 𝙔𝙤𝙪𝙧 𝙞𝙙𝙚𝙖𝙨 𝙙𝙚𝙨𝙚𝙧𝙫𝙚 𝙖 𝙝𝙤𝙢𝙚, 𝙖𝙣𝙙 𝙬𝙚 𝙗𝙪𝙞𝙡𝙙 𝙞𝙩 𝙬𝙞𝙩𝙝 𝙘𝙖𝙧𝙚. 𝙁𝙖𝙨𝙩, 𝙧𝙚𝙡𝙞𝙖𝙗𝙡𝙚, 𝙖𝙣𝙙 𝙙𝙚𝙨𝙞𝙜𝙣𝙚𝙙 𝙛𝙤𝙧 𝙘𝙧𝙚𝙖𝙩𝙤𝙧𝙨. 𝙅𝙤𝙞𝙣 𝙪𝙨 𝙖𝙣𝙙 𝙩𝙪𝙧𝙣 𝙫𝙞𝙨𝙞𝙤𝙣𝙨 𝙞𝙣𝙩𝙤 𝙧𝙚𝙖𝙡𝙞𝙩𝙮 — 𝙡𝙚𝙩 𝙮𝙤𝙪𝙧 𝙙𝙧𝙚𝙖𝙢𝙨 𝙩𝙖𝙠𝙚 𝙛𝙡𝙞𝙜𝙝𝙩 𝙬𝙞𝙩𝙝 𝘿𝙧𝙚𝙖𝙢𝙃𝙤𝙨𝙩."`;
  
    const h1El = document.getElementById('typed-h1');
    const pEl = document.getElementById('typed-p');
  
    let h1Index = 0;
    let pIndex = 0;
  
    function typeH1() {
      if (h1Index < h1Text.length) {
        h1El.textContent += h1Text.charAt(h1Index);
        h1Index++;
        setTimeout(typeH1, 150);
      } else {
        setTimeout(typeP, 500);
      }
    }
  
    function typeP() {
      if (pIndex < pText.length) {
        pEl.textContent += pText.charAt(pIndex);
        pIndex++;
        setTimeout(typeP, 20); // faster for paragraph
      }
    }
  
    typeH1();
  };

 