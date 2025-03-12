import React from "react";
import { Body, Column, Container, Head, Html, Img, Preview, Row, Section, Text } from "jsx-email";
import { createVariablesHelper } from "keycloakify-emails/variables";
import { PropsWithChildren, ReactNode } from "react";
import i18n from "./i18n";


const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const BASE_URL = process.env.BASE_URL || "https://www.reha-inside.de";

// const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

// const main = {
//   backgroundColor: '#efeef1',
//   fontFamily
// };

// const container = {
//   backgroundColor: "#ffffff",
//   margin: "0 auto",
//   marginBottom: "64px",
//   padding: "20px 0 48px",
// };

const container = {
  width: '580px',
  margin: '30px auto',
  backgroundColor: '#ffffff'
};

const content = {
  padding: '5px 30px 10px 30px'

};

const logo = {
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
  padding: 30
};

const sectionsBorders = {
  width: '100%',
  display: 'flex'
};
const sectionsBordersBottom = {
  width: '100%',
  display: 'flex',
  marginBottom: '20px'
};

const sectionBorder = {
  borderBottom: '1px solid rgb(238,238,238)',
  width: '249px'
};

const sectionCenter = {
  borderBottom: '1px solid rgb(255 212 0)',
  width: '102px'
};

const footer = {
  width: '580px',
  margin: '0 auto'
};

const currentYear = new Date().getFullYear();

const { exp } = createVariablesHelper("email-test.ftl");




export const EmailLayout = ({
  locale,
  children,
  preview,
}: PropsWithChildren<{ preview: ReactNode; locale: string }>) => {
  const t = i18n.getFixedT(locale);


  return (
    <Html lang={locale} >
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={200} src={`${process.env.BASE_URL}logo.svg`} />
          </Section>

          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>

          <Section style={content}>{children}</Section>



          <Section style={sectionsBordersBottom}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={footer}>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              Bitte beachten Sie unser{" "}
              <a
                href={`${BASE_URL}/Impressum`}
                style={{ textDecoration: "underline 4px", color: "#706a7b" }}
              >
                Impressum
              </a>
              , unsere{" "}
              <a
                href={`${BASE_URL}/Datenschutzhinweise`}
                style={{ textDecoration: "underline", color: "#706a7b" }}
              >
                Datenschutzrichtlinien
              </a>{" "}
              sowie die{" "}
              <a
                href={`${BASE_URL}/Nutzungsbedingungen`}
                style={{ textDecoration: "underline", color: "#706a7b" }}
              >
                Nutzungsbedingungen
              </a>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
