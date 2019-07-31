const fetch = require('node-fetch')
const p = process

const attachmentDefaults = {
  color: '#FF6347',
  author_name: 'uaz-digital/arizona-bootstrap',
  author_link: 'https://bitbucket.org/uaz-digital/arizona-bootstrap',
  text: p.env.COMMIT_MSG
}

function postMessage (channel, text, attachments) {
  const message = {
    'username': 'hexo',
    'icon_emoji': ':beryl:',
    channel,
    text,
    attachments
  }

  fetch(`https://hooks.slack.com/services/${p.env.SLACK_SECRET}`, { method: 'POST', body: JSON.stringify(message) })
}

const messages = {
  /* Hosted preview is available for review */
  previewReady () {
    const attachment = Object.assign({}, attachmentDefaults, {
      fallback: `Branch "${p.env.BRANCH}\` ready for review at: ${p.env.S3URL}/review/${p.env.BRANCH}`,
      title: `Review: ${p.env.BRANCH}`,
      title_link: `${p.env.S3URL}/review/${p.env.BRANCH}`
    })

    postMessage('#arizona-bootstrap', undefined, [attachment])
  },
}

const message = messages[process.argv.pop()]
try {
  message()
} catch (error) {
  console.error('Message not found')
}
