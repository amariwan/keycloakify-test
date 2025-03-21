import React from 'react';
import { previewLocale } from '../utils/previewLocale';
import i18n, { TFunction } from 'i18next';
import { Button, Text, render } from "jsx-email";
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
  textAlign: "left" as const,
};

export const previewProps: TemplateProps = {
  t: i18n.getFixedT(previewLocale),
  locale: previewLocale,
  themeName: "vanilla",
};

export const templateName = "Password Reset";

const { exp } = createVariablesHelper("password-reset.ftl");

export const Template = ({ locale, t }: TemplateProps) => {
  return (
    <EmailLayout preview={t('password-reset.subject')} locale={locale}>
      <Text style={paragraph}>
        {t('password-reset.message', { realmName: exp("realmName") })}
      </Text>
      <Text>
        <Button
          width={200}
          align="left"
          height={40}
          backgroundColor="#5e6ad2"
          borderRadius={3}
          textColor="#fff"
          fontSize={15}
          href={exp("link")}
        >
          {t('password-reset.resetButton')}
        </Button>
      </Text>
      <Text style={paragraph}>
        {t('password-reset.linkExpiration', { expiration: exp("linkExpirationFormatter(linkExpiration)") })}
      </Text>
      <Text style={paragraph}>
        {t('password-reset.ignoreMessage')}
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
  return t('password-reset.subject');
};
