/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

interface PageProps extends ComponentProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: "My Page Title" });
page.pageInfo();

export {};