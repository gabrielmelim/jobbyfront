import {
  Typography,
  Box,
  Select,
  MenuItem,
  Modal,
  FormControl,
  Divider,
  TextField,
  InputLabel,
  Switch,
  FormControlLabel,
  Button,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import { CidadeService } from "../../services/cidade";
import { TCidade, TPostCadastro, TProfissao } from "../../types";
import { ProfissaoService } from "../../services/profissao";
import { CadastroService } from "../../services/cadastro";

interface ModalCandidatoProps {
  open: boolean;
  onClose: () => void;
}

const habilidadesList = ["Java", "Spring", "SQL"];
const sexoList = ["FEMININO", "MASCULINO", "INDEFINIDO"];

export function ModalCandidato({ open, onClose }: ModalCandidatoProps) {
  const [listaCidades, setListaCidades] = useState<TCidade[] | null>(null);
  const [listaProfissoes, setListaProfissoes] = useState<TProfissao[] | null>(
    null
  );

  const [habilidades, setHabilidades] = useState<string[]>([]);
  const [cidade, setCidade] = useState<number>();
  const [profissao, setProfissao] = useState<number>();
  const [numeroWhatsProfissional, setNumeroWhatsProfissional] =
    useState<boolean>(false);
  const [nome, setNome] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<Dayjs | null>(null);
  const [telefone, setTelefone] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [numeroCelularProfissional, setNumeroCelularProfissional] =
    useState<number>();
  const [numeroCelularPessoal, setNumeroCelularPessoal] = useState<number>();
  const [pretensaoMinima, setPretensaoMinima] = useState<number>();
  const [pretensaoMaxima, setPretensaoMaxima] = useState<number>();
  const [cep, setCep] = useState<string>("");
  const [logradouro, setLogradouro] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { getCidades } = CidadeService();
      const { getProfissoes } = ProfissaoService();
      const cidades = await getCidades();
      setListaCidades(cidades);

      const profissoes = await getProfissoes();
      setListaProfissoes(profissoes);
    })();
  }, []);

  const criarCandidato = async () => {
    const formattedDate = dayjs(dataNascimento).format("YYYY-MM-DD");

    const formattedObject: TPostCadastro = {
      nome: nome,
      cpf: cpf,
      sexo: sexo,
      dataNascimento: formattedDate,
      telefone: telefone,
      email: email,
      numeroCelularProfissional: numeroCelularProfissional,
      isWhatsProfissional: numeroWhatsProfissional,
      numeroCelularPessoal: numeroCelularPessoal,
      isWhatsPessoal: !numeroWhatsProfissional,
      pretensaoMin: pretensaoMinima,
      pretensaoMax: pretensaoMaxima,
      habilidades: habilidades,
      idProfissao: profissao,
      endereco: {
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        idCidade: cidade,
      },
    };

    const { postCadastro } = CadastroService();
    await postCadastro(formattedObject);
  };

  return (
    <Modal open={open} onClose={() => onClose()}>
      <Box
        sx={{
          width: 1000,
          maxHeight: "90vh",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          overflowY: "auto",
        }}
      >
        <Typography variant="h6" component="h2">
          Criar candidato
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <FormControl
            fullWidth
            sx={{
              gap: 4,
            }}
          >
            <TextField
              label="Nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <TextField
              label="CPF"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
            <FormControl>
              <InputLabel id="sexo-label">Sexo</InputLabel>
              <Select
                labelId="sexo-label"
                label="Sexo"
                value={sexo}
                onChange={(event) => {
                  const sexo = event.target.value as string;
                  setSexo(sexo);
                }}
              >
                {sexoList.map((sexo) => (
                  <MenuItem key={sexo} value={sexo}>
                    {sexo}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Data de nascimento"
                  value={dataNascimento}
                  onChange={(newValue) => setDataNascimento(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            {/* <TextField
              label="Data nascimento"
              value={dataNascimento}
              onChange={(event) => setDataNascimento(event.target.value)}
            /> */}
            <TextField
              label="Telefone"
              type="number"
              value={telefone}
              onChange={(event) => setTelefone(Number(event.target.value))}
            />
            <TextField
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              label="Número de celular profissional"
              type="number"
              value={numeroCelularProfissional}
              onChange={(event) =>
                setNumeroCelularProfissional(Number(event.target.value))
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={numeroWhatsProfissional}
                  onChange={(event) =>
                    setNumeroWhatsProfissional(event.target.checked)
                  }
                />
              }
              label="Número de WhatsApp profissional?"
            />
            <TextField
              label="Número de celular pessoal"
              type="number"
              value={numeroCelularPessoal}
              onChange={(event) =>
                setNumeroCelularPessoal(Number(event.target.value))
              }
            />
            <TextField
              label="Pretensão mínima"
              type="number"
              value={pretensaoMinima}
              onChange={(event) =>
                setPretensaoMinima(Number(event.target.value))
              }
            />
            <TextField
              label="Pretensão máxima"
              type="number"
              value={pretensaoMaxima}
              onChange={(event) =>
                setPretensaoMaxima(Number(event.target.value))
              }
            />
            <FormControl>
              <InputLabel id="habilidades-label">Habilidades</InputLabel>
              <Select
                multiple
                label="Habilidades"
                labelId="habilidades-label"
                value={habilidades}
                onChange={(event) => {
                  const habilidade = event.target.value as string;
                  setHabilidades(
                    typeof habilidade === "string"
                      ? habilidade.split(",")
                      : habilidade
                  );
                }}
              >
                {habilidadesList.map((habilidade) => (
                  <MenuItem key={habilidade} value={habilidade}>
                    {habilidade}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="profissao-label">Profissão</InputLabel>
              <Select
                labelId="profissao-label"
                label="Profissão"
                onChange={(event) => setProfissao(Number(event.target.value))}
              >
                {listaProfissoes?.map((profissao) => (
                  <MenuItem
                    key={profissao.idProfissao}
                    value={profissao.idProfissao}
                  >
                    {profissao.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Divider />
            <TextField
              label="CEP"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
            />
            <TextField
              label="Logradouro"
              value={logradouro}
              onChange={(event) => setLogradouro(event.target.value)}
            />
            <TextField
              label="Número"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
            />
            <TextField
              label="Complemento"
              value={complemento}
              onChange={(event) => setComplemento(event.target.value)}
            />
            <TextField
              label="Bairro"
              value={bairro}
              onChange={(event) => setBairro(event.target.value)}
            />
            <FormControl>
              <InputLabel id="3">Cidade</InputLabel>
              <Select
                labelId="3"
                label="Cidade"
                onChange={(event) => setCidade(Number(event.target.value))}
              >
                {listaCidades?.map((cidade) => (
                  <MenuItem key={cidade.idCidade} value={cidade.idCidade}>
                    {cidade.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" type="submit" onClick={criarCandidato}>
              Criar
            </Button>
          </FormControl>
        </Typography>
      </Box>
    </Modal>
  );
}
