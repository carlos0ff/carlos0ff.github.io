-- 1.	Recuperar o nome e telefone dos clientes, o número de contrato de locação de veículo, além do modelo e placa do veículo. Ordene os contratos pela data de saída mais recente.

SELECT 
    c.nome AS nome_cliente,
    ct.numero AS numero_contrato,
    v.modelo AS modelo_veiculo,
    v.placa AS placa_veiculo
FROM contrato AS ct
JOIN cliente AS c ON ct.codigoCliente = c.codigo
JOIN veiculo AS v ON ct.idVeiculo = v.id
ORDER BY ct.dataSaida DESC;


-- 2.	Mostrar a cidade de cada filial, seu ano de fundação e o “Total de veículos” de cada filial específica.
SELECT 
  ci.nome AS cidade,
  ci.anoFundacao,
  COUNT(v.id) AS total_veiculos
FROM filial f
JOIN cidade ci ON f.idCidade = ci.codigo
LEFT JOIN veiculo v ON v.codFilial = f.codigo
GROUP BY ci.nome, ci.anoFundacao;


-- 3.	Mostrar todos os contratos firmados pelo cliente “Filomena” sobre o veículo de placa “'MAB0002'”. Mostrar o “Nome do cliente”, “Número do contrato”, “Placa do veículo”, “Modelo do veículo”, “Data saída” e “Data devolução” 
SELECT 
  c.nome AS nome_cliente,
  ct.numero AS numero_contrato,
  v.placa,
  v.modelo,
  ct.dataSaida,
  ct.dataDevolucao
FROM contrato ct
JOIN cliente c ON ct.codigoCliente = c.codigo
JOIN veiculo v ON ct.idVeiculo = v.id
WHERE c.nome = 'Filomena'
  AND v.placa = 'MAB0002';


-- 4.	Exibir a placa e o modelo de todos os veículos de 4 portas das filiais cuja população seja inferior a cem mil habitantes. Exibir também os nomes das cidades das filiais e as Ruas.

SELECT 
  v.placa,
  v.modelo,
  ci.nome AS city,
  f.rua
FROM veiculo v
JOIN filial f ON v.codFilial = f.codigo
JOIN cidade ci ON f.idCidade = ci.codigo
WHERE v.numPortas = 4
  AND ci.populacao < 100000;

-- 5.	Mostrar a quantidade de veículos com diárias maiores que 100 reais e registrados em filiais com população maior que 500 mil habitantes. Mostre o modelo do veículo e a quantidade.
SELECT 
  v.modelo,
  COUNT(*) AS quantidade
FROM veiculo v
JOIN filial f ON v.codFilial = f.codigo
JOIN cidade ci ON f.idCidade = ci.codigo
WHERE v.valorDiaria > 100
  AND ci.populacao > 500000
GROUP BY v.modelo;


-- 6. Mostrar a média do valor recebido por alocações feitas em cada veículo. Ordene estes valores em ordem decrescente.
SELECT 
  v.modelo,
  v.placa,
  ROUND(AVG(ct.valorPago), 2) AS media_valor_pago
FROM contrato ct
JOIN veiculo v ON ct.idVeiculo = v.id
GROUP BY v.id, v.modelo, v.placa
ORDER BY media_valor_pago DESC;

-- 7.	Exibir a placa, o modelo e o valor da diária do(s) veículo(s) que tiveram o maior valor de multa aplicada numa locação.
SELECT 
  v.placa,
  v.modelo,
  v.valorDiaria,
  ct.multa
    FROM contrato ct
JOIN veiculo v ON ct.idVeiculo = v.id WHERE ct.multa = (SELECT MAX(multa) FROM contrato);

-- 8.	Exiba o modelo e a placa dos veículos que ainda não foram locados na empresa.
SELECT v.modelo, v.placa FROM veiculo v LEFT JOIN contrato ct ON v.id = ct.idVeiculo WHERE ct.idVeiculo IS NULL;
