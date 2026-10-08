interface UserCardProps {
  name: string;
  age: number;
}

export default function UserCard({ name, age }: UserCardProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "8px" }}>
      <h3>ユーザー情報</h3>
      <p>名前：{name}</p>
      <p>年齢：{age}</p>
    </div>
  );
}
