using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using StudentInformationPage.Data;
using StudentInformationPage.Models;

namespace StudentInformationPage.Pages.account_data
{
    public class IndexModel : PageModel
    {
        private readonly StudentInformationPage.Data.StudentInformationPageContext _context;

        public IndexModel(StudentInformationPage.Data.StudentInformationPageContext context)
        {
            _context = context;
        }

        public IList<Student> Student { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Student = await _context.Student.ToListAsync();
        }
    }
}
