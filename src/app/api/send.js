export default function handler(req, res) {
  if(req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("SG.xxx");

    const msgToManager = {
      to: 'toyo.9st@gmail.com',
      from: 'tokyo.9st@gmail.com',
      subject: 'ポートフォリオサイトからの問い合わせ',
      text: req.body.name + '様から問い合わせがありました。' + 'メッセージ：' + req.body.message + 'アドレス：' + req.body.email,
      html: `
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>【メッセージ内容】</p>
      <p>${req.body.message}</p>
      `,
    }

    const msgToUser = {
      to: req.body.email,
      from: 'tokyo.9st@gmail.com',
      subject: 'お問い合わせありがとうございました。',
      text: 'お問い合わせを受け付けました。回答をお待ちください。' + req.body.message,
      html: `
        <p>${req.body.name}様</p>
        <p>お問い合わせを受け付けました。回答をお待ちください。</p><br />

        <p>【問い合わせ内容】</p>
        ${req.body.message}
      `,
    };

    (async () => {
      try {
        await sgMail.send(msgToManager);
        await sgMail.send(msgToUser);
        res.status(200).json(msgToUser);
      } catch (error){
        console.error(error);
        res.status(500).json(error);
      }
    })();
  }

  res.status(200)
}