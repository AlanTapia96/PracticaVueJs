<template>
  <div>
    <h3>Mis paneles</h3>
    <div class="boards-collection">
      <input
        type="text"
        placeholder="Añade un nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <Board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"
      ></Board-card>
    </div>
  </div>
</template>

<script>
import BoardCard from "@/components/boardcard";

export default {
  name: "Home-view",
  components: { BoardCard },
  data: function() {
    return {
      boardName: "",
      boards: [
        { id: "1", name: "Tareas" },
        { id: "2", name: "Lista de compras" }
      ]
    };
  },
  methods: {
    add() {
      this.boards.push({ name: this.boardName, id: this.boards.lenght });
      this.boardName = "";
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin: 1.5rem;
}

.boards-collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
}

input {
  box-sizing: border-box;
  background-color: #546e7a;
  border: 2px solid #546e7a;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
}

input:focus,
input:active {
  background-color: white;
  color: #546e7a;
}

input::placeholder {
  color: white;
}
</style>
