namespace IH.Domain.Entities
{
    public class District
    {
        public int Id { get; set; }

        public virtual City City { get; set; }

        public string Name { get; set; }
    }
}
