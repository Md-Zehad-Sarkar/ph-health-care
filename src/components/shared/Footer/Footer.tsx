import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17,26,34)">
      <Stack direction="row" justifyContent="center" gap={2} py={2}>
        <Typography color="white" component={Link} href="/consultation">
          Consultation
        </Typography>
        <Typography color="white" component={Link} href="/health-plans">
          Health Plans
        </Typography>
        <Typography color="white" component={Link} href="/medicine">
          Medicine
        </Typography>
        <Typography color="white" component={Link} href="/diagnostics">
          Diagnostics
        </Typography>
        <Typography color="white" component={Link} href="/ngos">
          NGOs
        </Typography>
      </Stack>
      <Stack direction="row" gap={4} py={3} justifyContent="center">
        <Image src={facebookIcon} alt="fb" width={30} height={30} />
        <Image src={instagramIcon} alt="fb" width={30} height={30} />
        <Image src={twitterIcon} alt="fb" width={30} height={30} />
        <Image src={linkedinIcon} alt="fb" width={30} height={30} />
      </Stack>
      <div className="border-b-[1px] border-dashed py-4"></div>
      <Stack direction="row" justifyContent="space-between" py={3}>
        <Typography component="p" color="white">
          &copy;2024 PH-HEALTH-CARE. All rights reserved.
        </Typography>
        <Typography variant="h5" component="h1" fontWeight={600} color="white">
          P
          <Box component="span" color="primary.main">
            H
          </Box>
          Health Care
        </Typography>
        <Typography color="white">Privacy policy! Terms&Conditions</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
