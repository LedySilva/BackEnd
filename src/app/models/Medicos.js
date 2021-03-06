import mongoose from 'mongoose';

const Medicos = new mongoose.Schema(
   {
      crm:              {type: String, required: true}, 
      nome:             {type: String, required: true},
      endereco:         {type: String, required: true},
      cpf:              {type: String, required: true},
      data_nascimento:  {type: Date, required: true},
      matricula:        {type: String, required: true},
      especialidades: []
  },
  {
    timestamps: true
  }
)

export default mongoose.model('medicos', Medicos);