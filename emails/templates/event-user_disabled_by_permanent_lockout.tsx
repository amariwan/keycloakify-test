import React from 'react';
import { previewLocale } from '../utils/previewLocale';
import i18n, { TFunction } from 'i18next';
import { Text, render } from "jsx-email";
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

export const templateName = "User Disabled by Permanent Lockout";

const { exp } = createVariablesHelper("event-user_disabled_by_permanent_lockout.ftl");

export const Template = ({ locale, t }: TemplateProps) => {
  return (
    <EmailLayout preview={t('event-user_disabled_by_permanent_lockout.subject')} locale={locale}>
      <Text style={paragraph}>
        {t('event-user_disabled_by_permanent_lockout.message', { date: exp("event.date") })}
      </Text>
      <Text style={paragraph}>
        {t('event-user_disabled_by_permanent_lockout.contactAdmin')}
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
  return t('event-user_disabled_by_permanent_lockout.subject');
};
