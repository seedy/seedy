import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import matchMediaHover from 'helpers/matchMediaHover';

import { useCallback, useEffect, useMemo, useState } from 'react';
import useIsXs from 'hooks/useIsXs';
import useIsDownMd from 'hooks/useIsDownMd';
import useClientSide from 'hooks/useClientSide';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PdfViewerContextProvider from 'components/dumb/PdfViewer/Context';
import PdfViewerToolbar from 'components/dumb/PdfViewer/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import ButtonDownload from 'components/dumb/Button/Download';
import CardHeadline from 'components/dumb/Card/Headline';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import CardSkillsTech from 'components/dumb/Card/Skills/Tech';
import CardSkillsSoft from 'components/dumb/Card/Skills/Soft';
import ImageListInterests from 'components/dumb/ImageList/Interests';
import HeroTypewriter from 'components/dumb/Hero/Typewriter';

import CloseIcon from '@mui/icons-material/Close';
import CardMe from 'components/dumb/Card/Me';
import TypographyBold from 'components/dumb/Typography/Bold';
import ButtonTranslate from 'components/smart/Button/Translate';

const PdfViewer = dynamic(() => import('components/dumb/PdfViewer'), { ssr: false });

// CONSTANTS
const TOOLBAR_HEIGHT = 48;
const ACTIONS_FOOTER_HEIGHT = 52;
const CONTENT_PADDING = 32;

const CV_NAME = {
  en: 'cv-en.pdf',
  fr: 'cv-fr.pdf',
};

const CV_FOLDER = '/cv/';

const HEADLINES_HEIGHT = 'calc(100vh - 2 * 64px - 3 * 8px - 64px)';

// HELPERS
const getMatchMediaHoverKeyword = () => (matchMediaHover() ? 'hoverTiles' : 'touchTiles');

const getIsCVOpen = (query) => query?.cv === 'true';

// SSG
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'interests', 'skills'])),
  },
});

// COMPONENTS
const Home = () => {
  const isXs = useIsXs();
  const isDownMd = useIsDownMd();

  const { locale, defaultLocale, pathname, replace, query } = useRouter();
  const cvName = useMemo(
    () => CV_NAME[locale || defaultLocale],
    [locale, defaultLocale],
  );
  const cvPath = useMemo(
    () => `${CV_FOLDER}${cvName}`,
    [cvName],
  );

  const { t } = useTranslation(['common', 'interests']);

  const subtitleKeyword = useClientSide(
    getMatchMediaHoverKeyword,
  );

  const listCols = useMemo(
    () => {
      if (isXs) {
        return 1;
      }
      if (isDownMd) {
        return 2;
      }
      return 3;
    },
    [isXs, isDownMd],
  );

  const [open, setOpen] = useState(false);

  const onOpen = useCallback(
    () => {
      replace({ pathname, query: { cv: true } }, { pathname, query: { cv: true } });
      setOpen(true);
    },
    [setOpen, replace, pathname],
  );

  const onClose = useCallback(
    () => {
      replace({ pathname });
      setOpen(false);
    },
    [setOpen, replace, pathname],
  );

  useEffect(() => {
    if (getIsCVOpen(query)) {
      setOpen(true);
    }
  }, [query, setOpen]);

  return (
    <Container maxWidth={false}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        mt={1}
        mb={2}
      >
        <Box mb={2}>
          <HeroTypewriter color="textPrimary" variant="h1">{t('common:heroTypewriter')}</HeroTypewriter>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box gap={8} flexDirection="column" display="flex" flexGrow="1" height="100%">
              <Fade in timeout={{ enter: 10000 }}>
                <CardMe sx={{ height: HEADLINES_HEIGHT }}>
                  <Box gap={2} mx={2} justifyContent="flex-end" flexDirection="column" display="flex" flexGrow="1" height="100%">
                    <TypographyBold color="textPrimary" variant="h2">
                      Cédric DUPUIS
                    </TypographyBold>
                    <Typography color="textPrimary" variant="h2">
                      Frontend Developer
                    </Typography>
                  </Box>
                </CardMe>
              </Fade>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <CardHeadline onClick={onOpen} sx={{ width: '100%%', height: HEADLINES_HEIGHT }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardSkillsTech />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardSkillsSoft />
          </Grid>
        </Grid>
        <Box pt={3} width="100%">
          <Grid container>
            <Grid item xs={12}>
              <Typography paragraph color="textPrimary" variant="h2">{t('common:heroPassion')}</Typography>
              <Typography color="textSecondary" variant="h3">
                {t(`common:${subtitleKeyword}`)}
              </Typography>
            </Grid>
            <Grid sx={{ alignItems: 'center' }} item xs={12}>
              <ImageListInterests cols={listCols} />
            </Grid>
          </Grid>
        </Box>
        <Dialog maxWidth={false} fullScreen onClose={onClose} open={open}>
          <PdfViewerContextProvider>
            <Box
              sx={{
                px: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                minHeight={48}
                width="100%"
                display="flex"
                alignItems="center"
                position="relative"
              >
                <DialogTitle variant="h2">{t('common:cv')}</DialogTitle>
                <PdfViewerToolbar
                  sx={{
                    margin: 'auto',
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    position: 'absolute',
                    right: 0,
                  }}
                >
                  <ButtonTranslate />
                  <IconButton
                    onClick={onClose}
                    size="large"
                    aria-label={t('common:close')}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <DialogContent
              sx={{
                py: 0,
                overflow: 'hidden',
              }}
              dividers
            >
              <PdfViewer
                file={cvPath}
                width="100%"
                height={`calc(100vh - ${ACTIONS_FOOTER_HEIGHT}px - ${TOOLBAR_HEIGHT}px - ${CONTENT_PADDING}px)`}
              />
            </DialogContent>
            <DialogActions>
              <ButtonDownload href={cvPath} download={cvName}>{t('common:download')}</ButtonDownload>
            </DialogActions>
          </PdfViewerContextProvider>
        </Dialog>
      </Box>
    </Container>
  );
};

export default Home;
