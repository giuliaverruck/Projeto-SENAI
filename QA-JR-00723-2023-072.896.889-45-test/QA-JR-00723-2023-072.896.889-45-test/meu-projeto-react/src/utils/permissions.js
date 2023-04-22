function hasPermission(req, res, next) {
    const { user } = req;
    const { id } = req.params;
    
    // Verifica se o usuário logado tem permissão para assumir a tarefa
    if (user.role === 'user' && req.method === 'PUT') {
      // Verifica se a tarefa já está assumida por outro usuário
      if (tarefa.userId !== null && tarefa.userId !== user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
    }
  
    // Verifica se o usuário logado tem permissão para finalizar a tarefa
    if (user.role === 'user' && req.method === 'PATCH') {
      // Verifica se a tarefa não está assumida pelo usuário logado
      if (tarefa.userId !== user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
    }
  
    next();
  }
  
  module.exports = hasPermission;
  