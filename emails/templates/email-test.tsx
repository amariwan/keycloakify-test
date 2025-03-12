import React from 'react';
import { previewLocale } from '../utils/previewLocale';
import i18n, { TFunction } from 'i18next';
import { Button, Link, render, Text } from "jsx-email";
import {
  GetSubject,
  GetTemplate,
  GetTemplateProps,
} from "keycloakify-emails";
import { createVariablesHelper } from "keycloakify-emails/variables";
import { EmailLayout } from "../layout";

type TemplateProps = Omit<GetTemplateProps, "plainText"> & { t: TFunction };

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const linkStyle = {
  textDecoration: 'underline',
};

export const previewProps: TemplateProps = {
  t: i18n.getFixedT(previewLocale),
  locale: previewLocale,
  themeName: "vanilla",
};

export const templateName = "Email Test";

const { exp } = createVariablesHelper("email-test.ftl");

const formattedDate = new Intl.DateTimeFormat('de', {
  dateStyle: 'medium',
  timeStyle: 'medium',
}).format(new Date());

export const Template = ({ locale, t }: TemplateProps) => {
  return (
    <EmailLayout preview="Here is a preview" locale={locale}>
      <Text style={paragraph}>
        {t('email-test.greeting')} oussema,
      </Text>
      <Text style={paragraph}>
        {t('email-test.passwordUpdate', { date: formattedDate })}
      </Text>
      <Text style={paragraph}>
        {t('email-test.passwordReset')}{' '}
        <Link href="#" style={linkStyle}>
          {t('email-test.passwordReset')}
        </Link>{' '}
        {t('email-test.passwordReset')}
      </Text>
      <Text style={paragraph}>
        {t('email-test.passwordAdvice')}
      </Text>
      <Button
        width={200}
        height={40}
        align="left"
        backgroundColor="#5e6ad2"
        borderRadius={3}
        textColor="#fff"
        fontSize={15}
        href="https://www.reha-inside.de"
      >
        {t('email-test.loginButton')}
      </Button>
      <Text style={paragraph}>
        {t('email-test.contactSupport', { realmName: exp("realmName") })}
      </Text>
      <Text style={paragraph}>
        {t('email-test.thanks')},
        <br />
        {t('email-test.supportTeam', { realmName: exp("realmName") })}
      </Text>
    </EmailLayout>
  );
};

export const getTemplate: GetTemplate = async (props) => {
  const t = i18n.getFixedT(props.locale);
  return await render(<Template {...props} t={t} />, { plainText: props.plainText });
};

export const getSubject: GetSubject = async (props) => {
  const t = i18n.getFixedT(props.locale);
  return t('email-test.subject');
};
