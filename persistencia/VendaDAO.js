function VendaDAO(connection){
  this._connection = connection;
};

VendaDAO.prototype.lista = function (callback) {
  this._connection.query('SELECT * FROM vendas', callback);
};

VendaDAO.prototype.salva = function (venda, callback){
  this._connection.query('INSERT INTO vendas SET ?', venda, callback);
};

VendaDAO.prototype.buscaPorID = function (id, callback){
  this._connection.query('SELECT * FROM vendas WHERE id = ?', id, callback);
};
