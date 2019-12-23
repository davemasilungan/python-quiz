import React from 'react';
import { Box, Email, Item, Span, A } from 'react-html-email'

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim()

const sourceURL = 'https://talentize.com'

const email = (
  <Email title="Test Email" headCSS={css}>
    <Item>
      <Span fontSize={15}>Thank You!</Span>
    </Item>
    <Item>
      <Box cellSpacing={20} width="100%" style={{ borderTop: '3px solid black' }}>
        <Item>
          <Span color="gray" lineHeight={10}>Your account is suspended, Please contact administrator at
          <A href="">contact@talentize.com</A></Span>
          <A download={sourceURL} href={sourceURL}>Source code</A>
        </Item>
      </Box>
    </Item>
  </Email>
)


export default email;