import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function NewApiForm(props) {
  const { categories, editApi } = useContext(AppContext);
  const {
    setUrl, setCategory, setDescription, category, description,
  } = props;

  return (
    <form className="w-full flex flex-col gap-4">
      <label
        forhtml="url"
        className="flex flex-col gap-2"
      >
        Endereço do repositório:
        <input
          type="url"
          id="url"
          placeholder="https://github.com/user/repo"
          pattern="https://.*"
          className="h-10 p-3 rounded-md bg-light-primary dark:bg-dark-primary focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none text-light-text dark:text-dark-text"
          value={editApi.url_repo}
          onChange={({ target }) => setUrl(target.value)}
          required
        />
      </label>
      <label forhtml="categorieselect" className="flex flex-col gap-2">
        Selecione a categoria:
        <select
          name="carmodel"
          id="categorieselect"
          className="h-10 rounded-md bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-300 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </label>
      <textarea
        type="text"
        placeholder="Descrição..."
        className="w-full h-28 p-3 rounded-md bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text focus:border-light-secondary focus:ring-light-secondary focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-300 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin"
        name="description"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
    </form>
  );
}

export default NewApiForm;
