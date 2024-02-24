import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()



const getChamps = (req, res) => {
   prisma.champion.findMany()

   .then((champions) => {
      res.json(champions)
   })

   .catch((error) => {
      res.json(error)
   })
}

const getChamp = (req, res) => {
   let id = Number(req.params.id)
   prisma.champion.findUnique({
      where: {
         id : id
      }
   })
   .then((champion) => {
      res.json(champion)
   })
   .catch((error) => {
      res.json(error)
   })

}

const createChamp = (req, res) => {
   console.log (req.body)
   const { name, type } = req.body
    
   prisma.champion.create({
       data: {
           name,
           type
         }
   })

  
   .then((champion) => {
       res.json(champion)
   })

   .catch((error) => {
       res.json(error)
   })
}

const updateChamp = (req, res) => {
   let id = Number(req.params.id)
   let champion = req.body

   prisma.champion.update({
      where: {
          id : id
      },
      data: {
          name : champion.name,
          type : champion.type
      }
  })

  .then((champion) => {
      res.json(champion)
  })
  .catch((error) => {
      res.json(error)
  })
}

const deleteChamp = (req, res) => {
   let id = Number(req.params.id)
   
   prisma.champion.delete({
      where :{
         id : id
      }
   })

   .then((champion) => {
      res.json(champion)
   })

   .catch((error) => {
      res.json(error)
   })
}


export { getChamps, getChamp, createChamp, updateChamp, deleteChamp }


