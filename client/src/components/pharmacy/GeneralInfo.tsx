import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { LocalPhone, Email, LocationOn } from '@mui/icons-material';
import './info.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type pharmacyData = {
  name: string;
  description: string;
  phone: string;
  location: string;
  email: string;
};

const GeneralInfo = () => {
  const [data, setData] = useState<pharmacyData | null>();
  const [loading, setLoading] = useState(true);
  const id = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const {
          data: { pharmacyData },
        } = await axios.get(`/pharmacy/${id}`, { signal: controller.signal });
        setData(pharmacyData[0]);
        setLoading(false);
      } catch (err) {
        setData(null);
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, []);

  return loading ? (
    <Box sx={{ width: '53vw', marginTop: '50px' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  ) : (
    <Box sx={{ marginTop: '50px' }}>
      <Typography className="GeneralInfo">General Info</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography className="name">{data?.name}</Typography>
        <Typography className="desc" paragraph>
          {data?.description}
        </Typography>
        <List className="info">
          <ListItem className="infoItem">
            <ListItemButton className="InfoButton">
              <IconButton>
                <LocalPhone />
              </IconButton>
              <ListItemText primary={data?.phone} className="infoText" />
            </ListItemButton>
          </ListItem>
          <ListItem className="infoItem">
            <ListItemButton className="InfoButton">
              <IconButton>
                <Email />
              </IconButton>
              <ListItemText primary={data?.email} className="infoText" />
            </ListItemButton>
          </ListItem>
          <ListItem className="infoItem">
            <ListItemButton className="InfoButton">
              <IconButton>
                <LocationOn />
              </IconButton>
              <ListItemText primary={data?.location} className="infoText" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default GeneralInfo;