import React, { useEffect, useState } from "react";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Player } from "@lottiefiles/react-lottie-player";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];

const muiBaseTheme = createTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

const theme = {
  overrides: {
    MuiCard: {
      root: {
        "&.MuiWildfireCard": {
          width: "22vw",
          maxHeight: "45vh",
          margin: "auto",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%",
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            padding: muiBaseTheme.spacing.unit * 2,
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold",
          },
          "& .MuiTypography--text": {
            lineHeight: 1.8,
          },
          "& .MuiAvatar-root": {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              marginLeft: -muiBaseTheme.spacing.unit,
            },
          },
        },
      },
    },
  },
};

const WildfireDetail = (detailInfo) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData({ ...detailInfo, isSpotted: false });
  }, [detailInfo]);

  return (
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={createTheme(theme)}>
        <div className="rightContainer">
          <div onClick={detailInfo.close}><Player
            src="https://assets6.lottiefiles.com/packages/lf20_unswjcf1.json"
            className="slidingAnimation"
            loop
            autoplay
          />
          </div>
          <div className="detailCard">
            <Card className={"MuiWildfireCard"} style={{ marginBottom: "5vh" }}>
              <CardMedia
                image={
                  "data:image/jpeg;base64,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"
                }
              />
              <CardContent>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Wildfire Details
                </Typography>
                <Typography
                  className={"MuiTypography--text"}
                  variant={"caption"}
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {data ? data.info.title + "\n" : "N/A"}
                  ID: {data ? data.info.id + "\n" : "N/A"}
                  Date: {data ? data.info.time + "\n" : "N/A"}
                </Typography>
              </CardContent>
            </Card>

            <Card className={"MuiWildfireCard"}>
              <CardContent>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  Wildfire Details
                </Typography>
                <Typography
                  className={"MuiTypography--text"}
                  variant={"caption"}
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {data ? data.info.title + "\n" : "N/A"}
                  ID: {data ? data.info.id + "\n" : "N/A"}
                  Date: {data ? data.info.time + "\n" : "N/A"}
                </Typography>
                <Divider light />
                {faces.map((face) => (
                  <Avatar key={face} src={face} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    </JssProvider>
  );
};

export default WildfireDetail;
