import React, { useState } from 'react';
import { Box ,Grid, Grid2, CardMedia, Typography, CardContent, Fab, Card, Checkbox, Button } from "@mui/material";
import './App.css';

function App() {

  const [respiratoria, setRespiratoria] = useState(0);
  const [gastrointestinal, setGastrointestinal] = useState(0);
  const [cardiovascular, setCardiovascular] = useState(0);
  const [musculoesqueletica, setMusculoesqueletica] = useState(0);
  const [neurologica, setNeurologica] = useState(0);
  const [dermatologica, setDermatologica] = useState(0);
  const [trastornosPsicologicos, setTrastornosPsicologicos] = useState(0);
  const [otrasCausas, setOtrasCausas] = useState(0);

  const [respiratoriaBool, setRespiratoriaBool] = useState(false);
  const [gastrointestinalBool, setGastrointestinalBool] = useState(false);
  const [cardiovascularBool, setCardiovascularBool] = useState(false);
  const [musculoesqueleticaBool, setMusculoesqueleticaBool] = useState(false);
  const [neurologicaBool, setNeurologicaBool] = useState(false);
  const [dermatologicaBool, setDermatologicaBool] = useState(false);
  const [trastornosPsicologicosBool, setTrastornosPsicologicosBool] = useState(false);
  const [otrasCausasBool, setOtrasCausasBool] = useState(false);

  const limpiarEstados = () => {
    if(respiratoriaBool)setRespiratoria(0)
    if(gastrointestinalBool)setGastrointestinal(0)
    if(cardiovascularBool)setCardiovascular(0)
    if(musculoesqueleticaBool)setMusculoesqueletica(0)
    if(neurologicaBool)setNeurologica(0)
    if(dermatologicaBool)setDermatologica(0)
    if(trastornosPsicologicosBool)setTrastornosPsicologicos(0)
    if(otrasCausasBool)setOtrasCausas(0)
    
      setRespiratoriaBool(false)
      setCardiovascularBool(false)
      setDermatologicaBool(false)
      setGastrointestinalBool(false)
      setMusculoesqueleticaBool(false)
      setNeurologicaBool(false)
      setOtrasCausasBool(false)
      setTrastornosPsicologicosBool(false)
  }

  return (
    <Box sx={{ padding:'5vh', alignItems:'center'}}>
    <Grid2 container spacing={0}>
    <Grid2 size={5}>
    </Grid2>
    <Grid2 size={2}>
    <Card sx={{ maxWidth: 545 }}>
        <CardMedia
          sx={{ height: 190 }}
          image="https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FKennen_4.jpg&w=1200&q=75"
          title="Doctor kennen taco"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DOCTOR KENNEN TACO
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
<Grid2 container spacing={8} direction="row" justifyContent="space-around">
        {/* Respiratoria */}
        <Grid2 >
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Respiratoria
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35}}
              onClick={() => setRespiratoria(respiratoria + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" fontSize={25} sx={{ marginLeft: 1, marginRight:1 }}>
              : {respiratoria}
            </Typography>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setRespiratoria(respiratoria - 1)}
            >
              -
            </Fab>
          </Box>
          <Grid2 sx={{paddingLeft:4.5}}>
          <Checkbox
  checked={respiratoriaBool}
  onChange={ () => {setRespiratoriaBool(!respiratoriaBool)}}
/>
</Grid2>
        </Grid2>

        {/* Gastrointestinal */}
        <Grid2 item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Gastrointestinal
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setGastrointestinal(gastrointestinal + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" fontSize={25} sx={{ marginLeft: 1 , marginRight: 1}}>
              : {gastrointestinal}
            </Typography>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setGastrointestinal(gastrointestinal - 1)}
            >
              -
            </Fab>
          </Box>
          <Grid2 sx={{paddingLeft:4.5}}>
          <Checkbox
  checked={gastrointestinalBool}
  onChange={() => {setGastrointestinalBool(!gastrointestinalBool)}}
/>
</Grid2>
        </Grid2>

        {/* Cardiovascular */}
        <Grid2 item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Cardiovascular
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setCardiovascular(cardiovascular + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" fontSize={25} sx={{ marginLeft: 1 , marginRight: 1}}>
              : {cardiovascular}
            </Typography>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setCardiovascular(cardiovascular - 1)}
            >
              -
            </Fab>
          </Box><Grid2 sx={{paddingLeft:4.5}}>
          <Checkbox
  checked={cardiovascularBool}
  onChange={()=> {setCardiovascularBool(!cardiovascularBool)}}
/>
</Grid2>
        </Grid2>

        {/* Musculoesqueletica */}
        <Grid2 item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Musculoesqueletica
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setMusculoesqueletica(musculoesqueletica + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" fontSize={25} sx={{ marginLeft: 1 , marginRight: 1}}>
              : {musculoesqueletica}
            </Typography>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setMusculoesqueletica(musculoesqueletica - 1)}
            >
              -
            </Fab>
          </Box><Grid2 sx={{paddingLeft:4.5}}>
          <Checkbox
  checked={musculoesqueleticaBool}
  onChange={()=> {setMusculoesqueleticaBool(!musculoesqueleticaBool)}}
/>
</Grid2>
        </Grid2>

        {/* Neurologica */}
        <Grid2 item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Neurologica
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setNeurologica(neurologica + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" fontSize={25} sx={{ marginLeft: 1 , marginRight: 1}}>
              : {neurologica}
            </Typography>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setNeurologica(neurologica - 1)}
            >
              -
            </Fab>
          </Box><Grid2 sx={{paddingLeft:4.5}}>
          <Checkbox
  checked={neurologicaBool}
  onChange={()=> {setNeurologicaBool(!neurologicaBool)}}
/>
</Grid2>
        </Grid2>

        {/* Dermatologica */}
        <Grid2 item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Dermatologica
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setDermatologica(dermatologica + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" fontSize={25} sx={{ marginLeft: 1 , marginRight: 1}}>
              : {dermatologica}
            </Typography>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setDermatologica(dermatologica - 1)}
            >
              -
            </Fab>
          </Box><Grid2 sx={{paddingLeft:4.5}}>
          <Checkbox
  checked={dermatologicaBool}
  onChange={()=> {setDermatologicaBool(!dermatologicaBool)}}
/>
</Grid2>
        </Grid2>

        {/* Trastornos Psicologicos */}
        <Grid2 item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Trastornos Psicologicos
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setTrastornosPsicologicos(trastornosPsicologicos + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" fontSize={25} sx={{ marginLeft: 1 , marginRight: 1}}>
              : {trastornosPsicologicos}
            </Typography>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setTrastornosPsicologicos(trastornosPsicologicos - 1)}
            >
              -
            </Fab>
          </Box><Grid2 sx={{paddingLeft:4.5}}>
          <Checkbox
  checked={trastornosPsicologicosBool}
  onChange={()=> {setTrastornosPsicologicosBool(!trastornosPsicologicosBool)}}
/>
</Grid2>
        </Grid2>

        {/* Otras causas */}
        <Grid2 item>
          <Typography variant="h5" gutterBottom sx={{ paddingTop: 0.5 }}>
            Otras causas
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setOtrasCausas(otrasCausas + 1)}
            >
              +
            </Fab>
            <Typography variant="body1" fontSize={25} sx={{ marginLeft: 1 , marginRight: 1}}>
              : {otrasCausas}
            </Typography>
            <Fab
              color="primary"
              aria-label="add"
              sx={{ width: 35, height: 35 }}
              onClick={() => setOtrasCausas(otrasCausas - 1)}
            >
              -
            </Fab>
          </Box><Grid2 sx={{paddingLeft:4.5}}>
          <Checkbox
  checked={otrasCausasBool}
  onChange={()=> {setOtrasCausasBool(!otrasCausasBool)}}
/>
</Grid2>
        </Grid2>
      </Grid2>
      </Grid2>
      <Grid2 paddingLeft={'85vh'}>
      <Button variant="contained" onClick={limpiarEstados}>Limpiar Seleccionados</Button>
      </Grid2>
      </Box>
  );
}

export default App;
