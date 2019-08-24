import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileImage from "../components/profile-image"
import styled from "styled-components"
import { colors } from "../utilities"

const Profile = styled.div`
  margin: 2em auto 0;
  max-width: 60em;
`

const Form = styled.form`
  width: 500px;
  max-width: 100%;
  margin-top: 2em;

  .form__element {
    margin-bottom: 1em;
  }

  label {
    display: block;
    margin-bottom: 0.25em;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font-size: 1.45em;
    border: 1px solid #ddd;
  }

  textarea {
    min-height: 5em;
  }

  button {
    display: block;
    height: 2em;
    padding: 0 1em;
    color: ${colors.white};
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-decoration: none;
    white-space: nowrap;
    background: ${colors.black};
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.2s;

    &:hover {
      background: ${colors.primary};
    }
  }
`

const AboutPage = () => (
  <Layout>
    <Profile>
      <SEO title="About" />
      <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
        <ProfileImage />
      </div>
      <p>Hi, I'm Ellis, an illustrator based in Folkestone.</p>
      <p>
        I'm always happy to discuss commisions and other opportunities - drop me
        a line!
      </p>

      <Form
        name="Ellis Contact Form"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Ellis Contact Form" />
        <p className="ohnohoney">
          <label>Don’t fill this out if you're human:</label>
          <input name="bot-field" />
        </p>
        <div className="form__element">
          <label>Your Name:</label>
          <input type="text" name="user-name" />
        </div>
        <div className="form__element">
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="form__element">
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </Form>
    </Profile>
  </Layout>
)

export default AboutPage
