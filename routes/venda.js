module.exports = function(app){

  app.get('/vendas', function(req, res){
    console.log('Recebida req de teste');
    res.send('OK');
  });

  app.post('/vendas/venda', function(req, res){

    var connection = app.persistencia.connectionFactory();
    var vendaDAO = new app.persistencia.VendaDAO(connection);

    vendaDAO.salva(venda, function(erro, resultado){

    });


    res.json(venda);
  });

};
