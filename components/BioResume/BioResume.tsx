import { Trans, useTranslation } from 'next-i18next'
import * as S from './styled'

export const BioResume = () => {
  const { t } = useTranslation('bio')

  // TODO add avatar here

  return (
    <S.BioWrapper>
      <S.Title>
        {/* {t('hello')} */}
        <Trans i18nKey={'bio:hello'} components={{ span: <span /> }} />
      </S.Title>
      <S.JobTitle>{t('job-title')}</S.JobTitle>
      {/* <S.Description>{t('description')}</S.Description> */}
    </S.BioWrapper>
  )
}
